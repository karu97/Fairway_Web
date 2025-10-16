import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import ParallaxHero from "@/components/home/ParallaxHero";
import Reveal from "@/components/shared/Reveal";
import SnapCarousel from "@/components/home/SnapCarousel";
import TeamSection from "@/components/shared/TeamSection";

export default function Home() {
  return (
    <MainLayout>
      <ParallaxHero />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <Reveal>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif">Hotel Highlights</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delayMs={40}>
            <div className="group rounded-xl border border-black/10 p-4 hover:shadow-md transition bg-white">
              <div className="relative h-48 sm:h-56 md:h-48">
                <Image src="/images/Meshendra_Garden/Main Image.png" alt="Meshendra Garden Hotel" fill className="object-cover rounded-lg" />
              </div>
              <div className="mt-4">
                <div className="font-medium text-sm sm:text-base">Meshendra Garden Hotel</div>
                <p className="text-xs sm:text-sm text-black/60 mt-1">Katunayake, Western Province • Near Colombo Airport</p>
                <Link href="/hotels/meshendra-garden" className="inline-block mt-3 text-xs sm:text-sm text-black/70 group-hover:text-black">View Details →</Link>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="group rounded-xl border border-black/10 p-4 hover:shadow-md transition bg-white">
              <div className="relative h-48 sm:h-56 md:h-48">
                <Image src="/images/E34_hotel_koslanda/2.JPG" alt="e34 Café, Restaurant & Hotel Koslanda" fill className="object-cover rounded-lg" />
              </div>
              <div className="mt-4">
                <div className="font-medium text-sm sm:text-base">e34 Café, Restaurant & Hotel Koslanda</div>
                <p className="text-xs sm:text-sm text-black/60 mt-1">Koslanda, Uva Province • Private natural pool</p>
                <Link href="/hotels/e34-koslanda" className="inline-block mt-3 text-xs sm:text-sm text-black/70 group-hover:text-black">View Details →</Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["🏊 Infinity Pool","🌿 Spa & Wellness","🍽️ Chef’s Tasting","🚘 Private Transfers"].map((a, idx) => (
            <Reveal key={a} delayMs={idx * 60}>
              <div className="flex items-center justify-center rounded-full border border-black/10 px-2 sm:px-4 py-2 text-xs sm:text-sm bg-white hover:bg-black/5 transition">
                {a}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-b from-[#f8f7f5] to-white">
          <div className="absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(600px_120px_at_50%_0%,rgba(0,0,0,0.06),transparent)]" />
          <div className="relative px-4 md:px-8 py-10">
            <div className="text-center">
              <span className="inline-block text-[10px] sm:text-[11px] tracking-widest uppercase text-black/60">Trusted Group</span>
              <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-serif">Our Companies</h2>
              <p className="mt-2 text-xs sm:text-sm text-black/60 max-w-2xl mx-auto">A family of brands shaping hospitality, agriculture, exports, and services in Sri Lanka.</p>
            </div>

            {(() => {
              const companies = [
                { name: "E34 Café", src: "/images/Our_Companies/e34_cafe.png" },
                { name: "Fairway Insurance Brokers", src: "/images/Our_Companies/Fairway_insurance_brokers.png" },
                { name: "Kosgolla Food Exports", src: "/images/Our_Companies/Kosgolla_Food_Exports.png" },
                { name: "Koslanda Plantation", src: "/images/Our_Companies/Koslanda_Plantation.png" },
              ];
              return (
                <div className="mt-8">
                  <div className="overflow-hidden">
                    <div className="flex gap-8 animate-marquee will-change-transform">
                      {[...companies, ...companies].map((c, i) => (
                        <div
                          key={`${c.name}-${i}`}
                          className="relative h-32 sm:h-40 md:h-48 w-[250px] sm:w-[300px] md:w-[360px] shrink-0 rounded-2xl bg-white/90 backdrop-blur border border-black/10 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(250px_100px_at_50%_0%,rgba(0,0,0,0.04),transparent)] rounded-2xl" />
                          <div className="relative h-full w-full flex flex-col items-center justify-center p-4 sm:p-6">
                            <div className="relative w-full h-16 sm:h-20 md:h-24">
                              <Image src={c.src} alt={c.name} fill className="object-contain" />
                            </div>
                            <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-black/80 text-center font-medium">{c.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 md:hidden">
                    {companies.map((c) => (
                      <div key={c.name} className="relative rounded-2xl bg-white/90 backdrop-blur border border-black/10 shadow-sm p-4 hover:shadow-md transition-all duration-300">
                        <div className="relative w-full h-16 sm:h-20">
                          <Image src={c.src} alt={c.name} fill className="object-contain" />
                        </div>
                        <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-black/80 text-center font-medium">{c.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>

      <TeamSection />


      {/* <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-end justify-between">
          <Reveal><h2 className="text-2xl md:text-3xl font-serif">Featured Tours</h2></Reveal>
          <Link href="/tours" className="text-sm text-black/70 hover:text-black">View all</Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} delayMs={i * 80}>
              <div className="rounded-xl overflow-hidden border border-black/10 group hover:shadow-md transition bg-white">
                <div className="relative h-44">
                  <Image src={`/images/tour-${i}.svg`} alt={`Tour ${i}`} fill className="object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
                <div className="p-4">
                  <div className="font-medium">Ceylon Discovery {i}</div>
                  <p className="text-sm text-black/60 mt-1">7 days • Colombo, Kandy, Ella, Galle</p>
                  <div className="mt-3 text-sm"><span className="font-medium">From $899</span> per person</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <Reveal><h2 className="text-xl sm:text-2xl md:text-3xl font-serif">Inspiration</h2></Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: "/images/Meshendra_Garden/6.png",
              tag: "Katunayake, Western Province",
              title: "Meshendra Garden Hotel",
            },
            {
              src: "/images/E34_hotel_koslanda/3.JPG",
              tag: "Koslanda, Uva Province",
              title: "e34 Café, Restaurant & Hotel Koslanda",
            },
            {
              src: "/images/Meshendra_Garden/4.png",
              tag: "Katunayake, Western Province",
              title: "Meshendra Garden Hotel",
            },
          ].map((item, idx) => (
            <Reveal key={item.src} delayMs={idx * 80}>
              <div className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden group">
                <Image fill src={item.src} alt={item.title} className="object-cover group-hover:scale-[1.04] transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">{item.tag}</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium">{item.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>



      <section className="mx-auto max-w-7xl px-4 py-14">
        <Reveal><h2 className="text-xl sm:text-2xl md:text-3xl font-serif">Explore Destinations</h2></Reveal>
        <div className="mt-6">
          <SnapCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Hotels", v: "+12" },
            { k: "Tours", v: "+24" },
            { k: "Reviews", v: "4.9★" },
            { k: "Countries", v: "15k+ Guests" },
          ].map((s, idx) => (
            <Reveal key={s.k} delayMs={idx * 60}>
              <div className="rounded-xl border border-black/10 p-4 sm:p-5 text-center bg-white">
                <div className="text-xl sm:text-2xl font-serif">{s.v}</div>
                <div className="text-xs text-black/60 mt-1">{s.k}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </MainLayout>
  );
}
