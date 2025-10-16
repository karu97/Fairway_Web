import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";

export const metadata = {
  title: "Meshendra Garden Hotel",
  description: "A tranquil and convenient stay near Colombo Airport with modern amenities.",
};

const amenities = [
  { k: "WiFi", v: "wifi" },
  { k: "Pool", v: "pool" },
  { k: "Restaurant", v: "restaurant" },
  { k: "Bar", v: "bar" },
  { k: "Conference", v: "conference" },
  { k: "Airport Transfer", v: "airport-transfer" },
  { k: "Room Service", v: "room-service" },
  { k: "Laundry", v: "laundry" },
  { k: "Parking", v: "parking" },
];

const rooms = [
  {
    title: "Budget Double Room",
    sleeps: 2,
    price: 14,
    desc:
      "Comfortable and affordable with queen bed and private bathroom. Ideal for couples or solo travelers seeking value.",
    features: ["Private Bathroom", "Air Conditioning", "Free WiFi", "Flat-Screen TV", "Room Service", "Daily Housekeeping", "Laundry Service"],
    image: "/images/Meshendra_Garden/Budget_Double_Room.png",
  },
  {
    title: "Double Room with Private Bathroom",
    sleeps: 2,
    price: 25,
    desc:
      "Cozy room with queen bed and modern private bathroom. Approximately 20–25 m².",
    features: ["Private Bathroom", "Air Conditioning", "Free WiFi", "Flat-Screen TV", "Room Service", "Laundry Service", "Daily Housekeeping"],
    image: "/images/Meshendra_Garden/Double_Room_Private_Bathroom.png",
  },
  {
    title: "Classic Triple Room",
    sleeps: 3,
    price: 27,
    desc:
      "Perfect for small groups or families with three beds and private bathroom.",
    features: ["Private Bathroom", "Air Conditioning", "Flat-Screen TV", "Room Service", "Daily Housekeeping", "Laundry Service"],
    image: "/images/Meshendra_Garden/Classic_Triple_Room.png",
  },
];

export default function MeshendraGardenPage() {
  return (
    <MainLayout>
      <article className="mx-auto max-w-7xl px-4 py-10">
        <header className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl font-serif">Meshendra Garden Hotel by Fairway Hotels</h1>
            <p className="text-black/70 mt-2">Katunayake, Western Province</p>
            <p className="text-black/70 mt-3 max-w-prose">A tranquil and convenient stay near Colombo Airport, with a focus on comfort, accessibility, and modern amenities.</p>
            <div className="mt-4 text-sm text-black/80">
              <div>📍 16B, Airport Road, Katunayake, Western Province, Sri Lanka</div>
              <div>📞 +94 11 225 4050 | +94 11 225 2860</div>
              <div>✉️ infor@hotelsfairway.com</div>
            </div>
          </div>
          <div className="relative h-56 md:h-72 rounded-xl overflow-hidden border border-black/10">
            <Image fill src="/images/Meshendra_Garden/Main Image.png" alt="Meshendra Garden" className="object-cover" />
          </div>
        </header>

        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">About</div>
              <p className="text-sm text-black/70 mt-2">
                5/5 (Based on guest reviews). A calm oasis minutes from Colombo International Airport, offering modern rooms,
                thoughtful amenities, and warm hospitality.
              </p>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Hotel Policies</div>
              <ul className="text-sm text-black/70 mt-2 space-y-2">
                <li>Check-in: 2:00 PM</li>
                <li>Check-out: 12:00 PM</li>
                <li>Cancellation: Free cancellation 24 hours before check-in</li>
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Amenities</div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {amenities.map((a) => (
                  <div key={a.v} className="rounded-full border border-black/10 px-3 py-2 text-xs bg-white">{a.k}</div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Rooms</div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {rooms.map((r) => (
                  <article key={r.title} className="rounded-lg overflow-hidden border border-black/10">
                    <div className="relative h-36">
                      <Image fill src={r.image} alt={r.title} className="object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-medium text-sm">{r.title}</div>
                      <div className="text-xs text-black/60">Sleeps {r.sleeps} • From ${r.price}</div>
                      <p className="text-xs text-black/70 mt-2">{r.desc}</p>
                      <ul className="mt-2 text-xs text-black/70 list-disc list-inside space-y-1">
                        {r.features.map((f) => (<li key={f}>{f}</li>))}
                      </ul>
                      <div className="mt-3 text-[11px] text-black/60">• Free cancellation 24h • Best price • Instant confirmation</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Location</div>
              <div className="text-sm text-black/70 mt-2">16B, Airport Road, Katunayake, Western Province, Sri Lanka</div>
              <div className="mt-3 aspect-video w-full rounded-lg overflow-hidden border border-black/10">
                <iframe
                  title="Meshendra Garden Map"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Katunayake%2C+Western+Province%2C+Sri+Lanka&output=embed"
                />
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5 text-sm text-black/80">
              <div className="font-medium">Contact</div>
              <div className="mt-2">📞 +94 11 225 4050 | +94 11 225 2860</div>
              <div>✉️ infor@hotelsfairway.com</div>
              <a className="mt-3 inline-block px-4 py-2 rounded-md border border-black/15 hover:bg-black/5" href="#">Visit Website</a>
            </div>
            <div className="rounded-xl border border-black/10 bg-white p-5">
              <div className="font-medium">Gallery</div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["Swiming_pool.png","Swiming_pool_1.png","4.png","5.png","6.png","10.png"].map((src) => (
                  <div key={src} className="relative aspect-square rounded-md overflow-hidden border border-black/10">
                    <Image fill src={`/images/Meshendra_Garden/${src}`} alt="Gallery" className="object-cover" />
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


