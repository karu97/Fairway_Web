import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { stripe } from '@/lib/stripe';
import { sendBookingConfirmationEmail, sendNewBookingNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const {
      type,
      itemId,
      itemType,
      checkIn,
      checkOut,
      guests,
      rooms,
      adults,
      children,
      infants,
      specialRequests,
      contactInfo,
      paymentMethod,
    } = body;

    // Validate required fields
    if (!type || !itemId || !itemType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Check-in date cannot be in the past' },
        { status: 400 }
      );
    }

    if (checkOutDate <= checkInDate) {
      return NextResponse.json(
        { error: 'Check-out date must be after check-in date' },
        { status: 400 }
      );
    }

    // Calculate duration for tours
    let durationDays = 1;
    if (itemType === 'tour') {
      const diffTime = checkOutDate.getTime() - checkInDate.getTime();
      durationDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Create booking record
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        type: type as any,
        itemId,
        itemType: itemType as any,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        durationDays,
        guests: guests || 1,
        rooms: rooms || 1,
        adults: adults || 1,
        children: children || 0,
        infants: infants || 0,
        specialRequests: specialRequests || '',
        contactInfo: contactInfo || {},
        status: 'PENDING',
        totalAmount: 0, // Will be calculated based on item
        currency: 'USD',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Calculate total amount based on item type and duration
    let totalAmount = 0;
    let itemDetails: any = {};

    if (itemType === 'hotel') {
      // Fetch hotel details and calculate room rate
      const hotel = await prisma.hotel.findUnique({
        where: { id: itemId },
        select: { priceFrom: true, currency: true, name: true },
      });

      if (!hotel) {
        return NextResponse.json(
          { error: 'Hotel not found' },
          { status: 404 }
        );
      }

      const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
      totalAmount = (hotel.priceFrom || 0) * nights * (rooms || 1);
      itemDetails = { name: hotel.name, pricePerNight: hotel.priceFrom, currency: hotel.currency };
    } else if (itemType === 'tour') {
      // Fetch tour details
      const tour = await prisma.tour.findUnique({
        where: { id: itemId },
        select: { priceFrom: true, currency: true, title: true, durationDays: true },
      });

      if (!tour) {
        return NextResponse.json(
          { error: 'Tour not found' },
          { status: 404 }
        );
      }

      totalAmount = (tour.priceFrom || 0) * (adults || 1);
      if (children && children > 0) {
        totalAmount += (tour.priceFrom || 0) * 0.7 * children; // 70% of adult price for children
      }
      if (infants && infants > 0) {
        totalAmount += (tour.priceFrom || 0) * 0.1 * infants; // 10% of adult price for infants
      }

      itemDetails = { name: tour.title, pricePerPerson: tour.priceFrom, currency: tour.currency };
    }

    // Update booking with calculated amount
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        totalAmount,
        currency: itemDetails.currency || 'USD',
      },
    });

    // Create Stripe checkout session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: itemDetails.currency?.toLowerCase() || 'usd',
            product_data: {
              name: `${itemType === 'hotel' ? 'Hotel' : 'Tour'} Booking`,
              description: `${itemDetails.name} - ${itemType === 'hotel' ? `${checkIn} to ${checkOut}` : `${durationDays} days`}`,
            },
            unit_amount: Math.round(totalAmount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/booking/cancel?booking_id=${booking.id}`,
      metadata: {
        bookingId: booking.id,
        itemType,
        itemId,
        userId: session.user.id,
      },
      customer_email: session.user.email || undefined,
    });

    // Update booking with Stripe session ID
    await prisma.booking.update({
      where: { id: booking.id },
      data: {
        stripeSessionId: stripeSession.id,
      },
    });

    // Send confirmation email
    try {
      await sendBookingConfirmationEmail({
        to: session.user.email!,
        bookingId: booking.id,
        itemName: itemDetails.name,
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
        totalAmount,
        currency: itemDetails.currency || 'USD',
        type: itemType,
      });
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the booking if email fails
    }

    // Send notification to admin
    try {
      await sendNewBookingNotification({
        bookingId: booking.id,
        itemName: itemDetails.name,
        itemType,
        userEmail: session.user.email!,
        totalAmount,
        currency: itemDetails.currency || 'USD',
      });
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      checkoutUrl: stripeSession.url,
      totalAmount,
      currency: itemDetails.currency || 'USD',
    });

  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    const where: any = { userId: session.user.id };
    if (status) {
      where.status = status;
    }

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          user: {
            select: { name: true, email: true },
          },
        },
      }),
      prisma.booking.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      bookings,
      pagination: {
        currentPage: page,
        totalPages,
        total,
        limit,
      },
    });

  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { bookingId, updates } = body;

    if (!bookingId || !updates) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify user owns the booking or is admin
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { userId: true, status: true },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    if (booking.userId !== session.user.id && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Only allow certain updates based on status
    const allowedUpdates: any = {};
    
    if (booking.status === 'PENDING') {
      // Allow most updates for pending bookings
      if (updates.specialRequests !== undefined) allowedUpdates.specialRequests = updates.specialRequests;
      if (updates.contactInfo !== undefined) allowedUpdates.contactInfo = updates.contactInfo;
      if (updates.guests !== undefined) allowedUpdates.guests = updates.guests;
      if (updates.rooms !== undefined) allowedUpdates.rooms = updates.rooms;
    } else if (booking.status === 'CONFIRMED') {
      // Limited updates for confirmed bookings
      if (updates.specialRequests !== undefined) allowedUpdates.specialRequests = updates.specialRequests;
      if (updates.contactInfo !== undefined) allowedUpdates.contactInfo = updates.contactInfo;
    }

    if (Object.keys(allowedUpdates).length === 0) {
      return NextResponse.json(
        { error: 'No valid updates provided' },
        { status: 400 }
      );
    }

    allowedUpdates.updatedAt = new Date();

    const updatedBooking = await prisma.booking.update({
      where: { id: bookingId },
      data: allowedUpdates,
    });

    return NextResponse.json({
      success: true,
      booking: updatedBooking,
    });

  } catch (error) {
    console.error('Error updating booking:', error);
    return NextResponse.json(
      { error: 'Failed to update booking' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const bookingId = searchParams.get('id');

    if (!bookingId) {
      return NextResponse.json(
        { error: 'Booking ID required' },
        { status: 400 }
      );
    }

    // Verify user owns the booking or is admin
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      select: { userId: true, status: true },
    });

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      );
    }

    if (booking.userId !== session.user.id && session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 403 }
      );
    }

    // Only allow cancellation of pending or confirmed bookings
    if (!['PENDING', 'CONFIRMED'].includes(booking.status)) {
      return NextResponse.json(
        { error: 'Cannot cancel booking in current status' },
        { status: 400 }
      );
    }

    // Update status to cancelled
    await prisma.booking.update({
      where: { id: bookingId },
      data: {
        status: 'CANCELLED',
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Booking cancelled successfully',
    });

  } catch (error) {
    console.error('Error cancelling booking:', error);
    return NextResponse.json(
      { error: 'Failed to cancel booking' },
      { status: 500 }
    );
  }
}
