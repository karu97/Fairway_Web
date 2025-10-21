"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      const offset = Math.min(40, y * 0.06);
      el.style.setProperty("--hero-y", `${offset}px`);
      el.style.setProperty("--hero-blur", `${Math.min(8, y * 0.01)}px`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f6f3ee] to-white" />
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="[transform:translateY(var(--hero-y,0))] [filter:blur(var(--hero-blur,0))] transition-[filter,transform] duration-300">
          <p className="uppercase tracking-[0.3em] text-xs text-black/60">Sri Lanka • Luxury Hospitality</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-serif leading-tight text-black">
            Fairway Hotels
            <span className="block text-black/70 font-normal text-xl md:text-2xl mt-3">Boutique stays & curated island tours</span>
          </h1>
          <p className="mt-5 text-black/70 dark:text-white/70 max-w-prose">Immerse yourself in contemporary elegance along Sri Lanka&apos;s golden coasts and misty highlands. Reserve beautifully designed rooms and discover bespoke journeys.</p>
          <div className="mt-8 flex items-center gap-3">
            <Link href="/hotels" className="px-5 py-3 rounded-md bg-black text-white text-sm hover:opacity-90">Explore Hotels</Link>
            <Link href="/tours" className="px-5 py-3 rounded-md border border-black/15 text-black text-sm hover:bg-black/5">View Tours</Link>
          </div>
        </div>
        <div className="relative h-80 md:h-[420px] [transform:translateY(calc(var(--hero-y,0)*-1))] transition-transform duration-300">
          <Image src="/images/fairway_hotels_hero.png" alt="Fairway Hotels" fill priority className="object-cover rounded-xl shadow-sm" />
        </div>
      </div>
    </section>
  );
}


