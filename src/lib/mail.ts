import { Resend } from 'resend';
import { config } from './config';

const resend = new Resend(config.email.resend?.apiKey);

interface BookingConfirmationEmailParams {
  to: string;
  bookingId: string;
  type: 'HOTEL' | 'TOUR';
  name: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  rooms?: number;
  totalPrice?: number;
  currency?: string;
}

interface AdminNotificationEmailParams {
  to: string;
  bookingId: string;
  type: 'HOTEL' | 'TOUR';
  name: string;
  email: string;
  phone?: string;
  startDate: Date;
  endDate: Date;
  guests: number;
  rooms?: number;
  totalPrice?: number;
  currency?: string;
  notes?: string;
}

export async function sendBookingConfirmationEmail(params: BookingConfirmationEmailParams) {
  if (!config.email.resend?.apiKey) {
    console.warn('Resend API key not configured, skipping email');
    return;
  }

  const { to, bookingId, type, name, startDate, endDate, guests, rooms, totalPrice, currency } = params;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPrice = (price: number, curr: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0,
    }).format(price);
  };

  try {
    await resend.emails.send({
      from: 'Fairway Hotels <noreply@fairwayhotels.com>',
      to: [to],
      subject: `Booking Confirmation - ${type === 'HOTEL' ? 'Hotel' : 'Tour'} Reservation`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0ea5e9, #1e40af); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">Fairway Hotels</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Booking Confirmation</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Thank you for your booking!</h2>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 25px;">
              Dear ${name},<br><br>
              We have received your ${type.toLowerCase()} booking request and are excited to help you plan your Sri Lankan adventure!
            </p>
            
            <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 20px;">Booking Details</h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Booking ID:</strong><br>
                  <span style="color: #64748b;">${bookingId}</span>
                </div>
                <div>
                  <strong style="color: #475569;">Type:</strong><br>
                  <span style="color: #64748b;">${type === 'HOTEL' ? 'Hotel Stay' : 'Tour Package'}</span>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Check-in/Start:</strong><br>
                  <span style="color: #64748b;">${formatDate(startDate)}</span>
                </div>
                <div>
                  <strong style="color: #475569;">Check-out/End:</strong><br>
                  <span style="color: #64748b;">${formatDate(endDate)}</span>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Guests:</strong><br>
                  <span style="color: #64748b;">${guests} person${guests > 1 ? 's' : ''}</span>
                </div>
                ${rooms ? `
                <div>
                  <strong style="color: #475569;">Rooms:</strong><br>
                  <span style="color: #64748b;">${rooms} room${rooms > 1 ? 's' : ''}</span>
                </div>
                ` : ''}
              </div>
              
              ${totalPrice ? `
              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 20px;">
                <strong style="color: #475569;">Estimated Total:</strong><br>
                <span style="color: #0ea5e9; font-size: 20px; font-weight: bold;">${formatPrice(totalPrice, currency)}</span>
              </div>
              ` : ''}
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
              <h4 style="color: #92400e; margin-top: 0;">What happens next?</h4>
              <ul style="color: #92400e; margin: 0; padding-left: 20px;">
                <li>Our team will review your request within 24 hours</li>
                <li>We'll send you a detailed confirmation with all the specifics</li>
                <li>Payment instructions will be provided if required</li>
                <li>Feel free to contact us with any questions</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6; margin-bottom: 25px;">
              If you have any questions or need to make changes to your booking, please don't hesitate to contact us:
            </p>
            
            <div style="text-align: center;">
              <a href="mailto:bookings@fairwayhotels.com" style="background: #0ea5e9; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Contact Us
              </a>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">© 2025 Fairway Hotels. All rights reserved.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.7;">123 Galle Road, Colombo 03, Sri Lanka</p>
          </div>
        </div>
      `,
    });

    console.log('Booking confirmation email sent successfully');
  } catch (error) {
    console.error('Failed to send booking confirmation email:', error);
    throw error;
  }
}

export async function sendAdminNotificationEmail(params: AdminNotificationEmailParams) {
  if (!config.email.resend?.apiKey) {
    console.warn('Resend API key not configured, skipping email');
    return;
  }

  const { to, bookingId, type, name, email, phone, startDate, endDate, guests, rooms, totalPrice, currency, notes } = params;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatPrice = (price: number, curr: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr,
      minimumFractionDigits: 0,
    }).format(price);
  };

  try {
    await resend.emails.send({
      from: 'Fairway Hotels <noreply@fairwayhotels.com>',
      to: [to],
      subject: `New ${type === 'HOTEL' ? 'Hotel' : 'Tour'} Booking - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">New Booking Alert</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Fairway Hotels</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">New ${type === 'HOTEL' ? 'Hotel' : 'Tour'} Booking Received</h2>
            
            <div style="background: white; border-radius: 12px; padding: 25px; margin-bottom: 25px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <h3 style="color: #1e293b; margin-top: 0; margin-bottom: 20px;">Customer Information</h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Name:</strong><br>
                  <span style="color: #64748b;">${name}</span>
                </div>
                <div>
                  <strong style="color: #475569;">Email:</strong><br>
                  <span style="color: #64748b;">${email}</span>
                </div>
              </div>
              
              ${phone ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #475569;">Phone:</strong><br>
                <span style="color: #64748b;">${phone}</span>
              </div>
              ` : ''}
              
              <h3 style="color: #1e293b; margin-top: 30px; margin-bottom: 20px;">Booking Details</h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Booking ID:</strong><br>
                  <span style="color: #64748b;">${bookingId}</span>
                </div>
                <div>
                  <strong style="color: #475569;">Type:</strong><br>
                  <span style="color: #64748b;">${type === 'HOTEL' ? 'Hotel Stay' : 'Tour Package'}</span>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Start Date:</strong><br>
                  <span style="color: #64748b;">${formatDate(startDate)}</span>
                </div>
                <div>
                  <strong style="color: #475569;">End Date:</strong><br>
                  <span style="color: #64748b;">${formatDate(endDate)}</span>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div>
                  <strong style="color: #475569;">Guests:</strong><br>
                  <span style="color: #64748b;">${guests} person${guests > 1 ? 's' : ''}</span>
                </div>
                ${rooms ? `
                <div>
                  <strong style="color: #475569;">Rooms:</strong><br>
                  <span style="color: #64748b;">${rooms} room${rooms > 1 ? 's' : ''}</span>
                </div>
                ` : ''}
              </div>
              
              ${totalPrice ? `
              <div style="margin-bottom: 20px;">
                <strong style="color: #475569;">Estimated Total:</strong><br>
                <span style="color: #059669; font-size: 18px; font-weight: bold;">${formatPrice(totalPrice, currency)}</span>
              </div>
              ` : ''}
              
              ${notes ? `
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <strong style="color: #475569;">Special Notes:</strong><br>
                <span style="color: #64748b;">${notes}</span>
              </div>
              ` : ''}
            </div>
            
            <div style="text-align: center;">
              <a href="${config.site.url}/admin/bookings" style="background: #059669; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                View in Admin Panel
              </a>
            </div>
          </div>
          
          <div style="background: #1e293b; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">© 2025 Fairway Hotels. All rights reserved.</p>
            <p style="margin: 5px 0 0 0; opacity: 0.7;">Admin Notification</p>
          </div>
        </div>
      `,
    });

    console.log('Admin notification email sent successfully');
  } catch (error) {
    console.error('Failed to send admin notification email:', error);
    throw error;
  }
}

// Fallback SMTP function (if Resend is not available)
export async function sendEmailViaSMTP(params: any) {
  // This would be implemented with nodemailer or similar SMTP library
  console.warn('SMTP email not implemented, please configure Resend API key');
  return Promise.resolve();
}
