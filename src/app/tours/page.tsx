import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "Tours",
  description: "Curated tour packages across Sri Lanka with expert local guides.",
};


export default function ToursPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-serif">Tours</h1>
        <p className="text-black/70 mt-2">Thoughtfully designed itineraries to explore the best of Sri Lanka.</p>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.map((t) => (
            <article key={t.id} className="rounded-xl overflow-hidden border border-black/10 hover:shadow-sm transition">
              <div className="relative h-44">
                <Image src={t.image} alt={t.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{t.title}</h3>
                <p className="text-sm text-black/60">{t.days} days • Private transfers • Boutique stays</p>
                <div className="mt-3 text-sm"><span className="font-medium">From ${t.price}</span> per person</div>
                <button className="mt-3 px-4 py-2 text-sm rounded-md border border-black/15 hover:bg-black/5">View Itinerary</button>
              </div>
            </article>
          ))}
        </div> */}
      </section>
    </MainLayout>
  );
}


