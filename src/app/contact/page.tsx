import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Fairway Hotels for bookings and inquiries.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif">Contact Us</h1>
          <p className="text-black/70 mt-2 text-sm sm:text-base">We&apos;d love to help plan your stay and Sri Lankan journey.</p>
          <form className="mt-6 space-y-4">
            <input className="w-full border border-black/20 px-3 py-2 rounded-md text-sm sm:text-base" placeholder="Full name" />
            <input className="w-full border border-black/20 px-3 py-2 rounded-md text-sm sm:text-base" placeholder="Email address" type="email" />
            <input className="w-full border border-black/20 px-3 py-2 rounded-md text-sm sm:text-base" placeholder="Phone" />
            <textarea className="w-full border border-black/20 px-3 py-2 rounded-md text-sm sm:text-base" placeholder="Message" rows={5} />
            <button className="px-4 sm:px-5 py-2 sm:py-3 rounded-md bg-black text-white text-sm">Send message</button>
          </form>
        </div>
        <div>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-black/10">
            <iframe
              title="Fairway Hotels Map"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63375.32390868738!2d79.830!3d6.927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595d0e3c9d2d%3A0x3d2c3c3c3c3c3c3c!2sColombo!5e0!3m2!1sen!2slk!4v1700000000000"
            />
          </div>
          <div className="mt-6 rounded-xl p-4 sm:p-6 bg-gradient-to-r from-black to-neutral-700 text-white">
            <div className="text-lg sm:text-xl font-serif">Book direct for best rates</div>
            <p className="text-xs sm:text-sm text-white/80 mt-1">📞 +94 72 250 9609 • ✉️ info@hotelsfairway.com</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


