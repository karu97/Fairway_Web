import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";

export const metadata = {
  title: "e34 Café, Restaurant & Hotel Koslanda Hideaway",
  description: "Koslanda hideaway with a private natural pool, diverse dining, and family-friendly amenities.",
};

const gallery = ["2.JPG","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG","10.JPG","11.JPG","12.JPG","13.JPG","14.JPG","15.JPG","16.JPG"];

export default function E34KoslandaPage() {
  return (
    <MainLayout>
      <article className="mx-auto max-w-7xl px-4 py-10">
        <header className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl font-serif">e34 Café, Restaurant & Hotel Koslanda Hideaway</h1>
            <p className="text-black/70 mt-2">Colombo - Ratnapura - Wellawaya - Batticaloa Rd, Koslanda 90190</p>
            <p className="text-black/70 mt-3 max-w-prose">Comfortable accommodations with a private natural pool, lush garden, and water sports facilities. Enjoy live music and karaoke, with diverse dining including Indian, Korean, local Sri Lankan, Asian, international, and BBQ options. Vegetarian, vegan, gluten-free, and dairy-free menus available.</p>
            <div className="mt-4 text-sm text-black/80">
              <div>🕘 24-hour front desk • ☕ Coffee shop • 🚲 Bicycle parking • 🧳 Luggage storage</div>
              <div>👨‍👩‍👧 Family rooms • 🅿️ Free private parking • 🏡 Outdoor seating</div>
            </div>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden border border-black/10">
            <Image fill src="/images/E34_hotel_koslanda/2.JPG" alt="E34 Koslanda" className="object-cover" />
          </div>
        </header>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">About this property</div>
              <p className="text-sm text-black/70 mt-2">Located near iconic attractions: Demodara Nine Arch Bridge (30 mi), Haputale Railway Station (15 mi), Ella Rock (26 mi). Approximately 46 mi from Mattala Rajapaksa International Airport.</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Dining Experience</div>
              <p className="text-sm text-black/70 mt-2">Restaurant serves Indian, Korean, local, Asian, international, and BBQ grill cuisines. Live music and karaoke available. Vegetarian, vegan, gluten-free, and dairy-free options on request.</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Vacation Home</div>
              <ul className="text-sm text-black/70 mt-2 space-y-2">
                <li>Entire vacation home • 46 m² • View • Private bathroom</li>
                <li>Bedroom: 6 full beds • Living room: 1 sofa bed</li>
                <li>Layout: 1 living room, 1 bedroom, 1 bathroom with shower</li>
                <li>Facilities: Dining area • Dining table</li>
              </ul>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Location</div>
              <div className="text-sm text-black/70 mt-2">Colombo - Ratnapura - Wellawaya - Batticaloa Rd, Koslanda 90190</div>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden border border-black/10">
                <iframe
                  title="E34 Koslanda Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Koslanda%2C+Sri+Lanka&output=embed"
                />
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Gallery</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {gallery.map((src) => (
                  <div key={src} className="relative aspect-square rounded-md overflow-hidden border border-black/10">
                    <Image fill src={`/images/E34_hotel_koslanda/${src}`} alt="Gallery" className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </MainLayout>
  );
}


