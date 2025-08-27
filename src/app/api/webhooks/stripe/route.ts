import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { prisma } from '@/lib/prisma';

// During build on Vercel, env vars may be unset which would crash module init.
// Use harmless fallbacks so import time does not throw; real secrets must be
// configured in production and will override these at runtime.
const STRIPE_KEY_FALLBACK = 'sk_test_placeholder';
const WEBHOOK_SECRET_FALLBACK = 'whsec_placeholder';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || STRIPE_KEY_FALLBACK, {
  apiVersion: '2023-10-16',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || WEBHOOK_SECRET_FALLBACK;

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    // If running without real webhook secret (e.g., during build probes) just noop
    if (!signature || webhookSecret === WEBHOOK_SECRET_FALLBACK) {
      return NextResponse.json(
        { ok: true },
        { status: 200 }
      );
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      );
    }

    console.log('Received Stripe webhook event:', event.type);

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'payment_intent.succeeded':
        await handlePaymentIntentSucceeded(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'payment_intent.payment_failed':
        await handlePaymentIntentFailed(event.data.object as Stripe.PaymentIntent);
        break;
      
      case 'charge.refunded':
        await handleChargeRefunded(event.data.object as Stripe.Charge);
        break;
      
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      
      case 'invoice.payment_failed':
        await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  try {
    console.log('Processing checkout session completed:', session.id);

    if (!session.metadata?.bookingId) {
      console.error('No booking ID in session metadata');
      return;
    }

    const bookingId = session.metadata.bookingId;
    const paymentIntentId = session.payment_intent as string;

    // Update booking status to PAID
    await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'PAID',
        stripeSessionId: session.id,
        paymentIntentId: paymentIntentId,
        updatedAt: new Date(),
      },
    });

    console.log(`Booking ${bookingId} marked as paid`);

    // Send confirmation email to customer
    // await sendBookingConfirmationEmail(bookingId);

  } catch (error) {
    console.error('Error handling checkout session completed:', error);
    throw error;
  }
}

async function handlePaymentIntentSucceeded(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing payment intent succeeded:', paymentIntent.id);

    // Find booking by payment intent ID
    const booking = await prisma.booking.findFirst({
      where: { paymentIntentId: paymentIntent.id },
    });

    if (!booking) {
      console.error('No booking found for payment intent:', paymentIntent.id);
      return;
    }

    // Update booking status to PAID
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        status: 'PAID',
        updatedAt: new Date(),
      },
    });

    console.log(`Booking ${booking.id} marked as paid via payment intent`);

    // Send confirmation email to customer
    // await sendBookingConfirmationEmail(booking.id);

  } catch (error) {
    console.error('Error handling payment intent succeeded:', error);
    throw error;
  }
}

async function handlePaymentIntentFailed(paymentIntent: Stripe.PaymentIntent) {
  try {
    console.log('Processing payment intent failed:', paymentIntent.id);

    // Find booking by payment intent ID
    const booking = await prisma.booking.findFirst({
      where: { paymentIntentId: paymentIntent.id },
    });

    if (!booking) {
      console.error('No booking found for payment intent:', paymentIntent.id);
      return;
    }

    // Update booking status to PENDING (payment failed)
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        status: 'PENDING',
        updatedAt: new Date(),
      },
    });

    console.log(`Booking ${booking.id} marked as pending due to payment failure`);

    // Send payment failure notification to customer
    // await sendPaymentFailureEmail(booking.id);

  } catch (error) {
    console.error('Error handling payment intent failed:', error);
    throw error;
  }
}

async function handleChargeRefunded(charge: Stripe.Charge) {
  try {
    console.log('Processing charge refunded:', charge.id);

    // Find booking by payment intent ID
    const paymentIntentId = charge.payment_intent as string;
    if (!paymentIntentId) return;

    const booking = await prisma.booking.findFirst({
      where: { paymentIntentId: paymentIntentId },
    });

    if (!booking) {
      console.error('No booking found for charge:', charge.id);
      return;
    }

    // Update booking status to CANCELLED
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        status: 'CANCELLED',
        updatedAt: new Date(),
      },
    });

    console.log(`Booking ${booking.id} marked as cancelled due to refund`);

    // Send refund confirmation email to customer
    // await sendRefundConfirmationEmail(booking.id);

  } catch (error) {
    console.error('Error handling charge refunded:', error);
    throw error;
  }
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  try {
    console.log('Processing invoice payment succeeded:', invoice.id);

    // Handle subscription-based payments if needed
    // This could be for recurring tour packages or hotel memberships

    if (invoice.subscription) {
      console.log('Subscription payment succeeded:', invoice.subscription);
      // Handle subscription logic here
    }

  } catch (error) {
    console.error('Error handling invoice payment succeeded:', error);
    throw error;
  }
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  try {
    console.log('Processing invoice payment failed:', invoice.id);

    // Handle failed subscription payments
    if (invoice.subscription) {
      console.log('Subscription payment failed:', invoice.subscription);
      // Handle subscription failure logic here
    }

  } catch (error) {
    console.error('Error handling invoice payment failed:', error);
    throw error;
  }
}

// Handle GET requests for webhook verification
export async function GET() {
  return NextResponse.json({ 
    message: 'Stripe webhook endpoint is active',
    timestamp: new Date().toISOString()
  });
}
