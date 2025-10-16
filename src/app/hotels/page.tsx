import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hotels",
  description: "Discover luxury rooms and boutique stays across Sri Lanka.",
};

const hotels = [
  {
    id: 1,
    slug: "meshendra-garden",
    name: "Meshendra Garden Hotel by Fairway Hotels",
    image: "/images/Meshendra_Garden/Main Image.png",
    location: "Katunayake, Western Province",
    perk: "Near Colombo Airport",
  },
  {
    id: 2,
    slug: "e34-koslanda",
    name: "e34 Café, Restaurant & Hotel Koslanda Hideaway",
    image: "/images/E34_hotel_koslanda/2.JPG",
    location: "Koslanda, Uva Province",
    perk: "Private natural pool",
  },
];

export default function HotelsPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-2xl sm:text-3xl font-serif">Our Hotels</h1>
        <p className="text-black/70 mt-2 text-sm sm:text-base">Stay at design-forward spaces in Sri Lanka&apos;s most captivating locations.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((h) => (
            <article key={h.id} className="rounded-xl overflow-hidden border border-black/10 hover:shadow-sm transition bg-white">
              <div className="relative h-40 sm:h-48">
                <Image src={h.image} alt={h.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm sm:text-base">{h.name}</h3>
                <p className="text-xs sm:text-sm text-black/60">{h.location} • {h.perk}</p>
                {h.slug ? (
                  <Link href={`/hotels/${h.slug}`} className="inline-block mt-3 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md border border-black/15 hover:bg-black/5">View Details</Link>
                ) : (
                  <span className="inline-block mt-3 px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-md border border-black/15 text-black/50">Coming Soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}


