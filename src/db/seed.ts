import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create admin user
  const adminPassword = await hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@fairwayhotels.com' },
    update: {},
    create: {
      email: 'admin@fairwayhotels.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  // Create test user
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Test User',
      role: 'USER',
    },
  });

  console.log('✅ Users created:', { admin: admin.email, test: testUser.email });

  // Create sample bookings
  const sampleBookings = [
    {
      type: 'HOTEL' as const,
      hotelSlug: 'fairway-colombo',
      startDate: new Date('2025-02-15'),
      endDate: new Date('2025-02-18'),
      guests: 2,
      rooms: 1,
      totalPrice: 45000, // $450
      currency: 'USD',
      status: 'CONFIRMED' as const,
      contactName: 'John Doe',
      contactEmail: 'john@example.com',
      contactPhone: '+1234567890',
      notes: 'Early check-in requested',
    },
    {
      type: 'TOUR' as const,
      tourSlug: 'cultural-heritage-tour',
      startDate: new Date('2025-03-01'),
      endDate: new Date('2025-03-03'),
      guests: 4,
      totalPrice: 120000, // $1,200
      currency: 'USD',
      status: 'PAID' as const,
      contactName: 'Jane Smith',
      contactEmail: 'jane@example.com',
      contactPhone: '+1987654321',
      notes: 'Vegetarian meals preferred',
    },
  ];

  for (const booking of sampleBookings) {
    await prisma.booking.create({
      data: {
        ...booking,
        userId: testUser.id,
      },
    });
  }

  console.log('✅ Sample bookings created');

  // Create sample inquiries
  const sampleInquiries = [
    {
      type: 'general',
      name: 'Corporate Client',
      email: 'corporate@company.com',
      phone: '+1122334455',
      subject: 'Corporate Event Planning',
      message: 'We are interested in hosting our annual conference at your Colombo property. Please provide details about conference facilities and catering options.',
      status: 'new',
    },
    {
      type: 'hotel',
      name: 'Travel Agent',
      email: 'agent@travel.com',
      phone: '+1555666777',
      subject: 'Bulk Booking Inquiry',
      message: 'We have a group of 20 tourists arriving in June. Looking for special rates and availability across your properties.',
      status: 'in_progress',
    },
  ];

  for (const inquiry of sampleInquiries) {
    await prisma.inquiry.create({
      data: inquiry,
    });
  }

  console.log('✅ Sample inquiries created');

  // Create newsletter subscriptions
  const sampleSubscriptions = [
    'newsletter@example.com',
    'traveler@example.com',
    'business@example.com',
  ];

  for (const email of sampleSubscriptions) {
    await prisma.newsletterSubscription.upsert({
      where: { email },
      update: {},
      create: { email },
    });
  }

  console.log('✅ Newsletter subscriptions created');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
