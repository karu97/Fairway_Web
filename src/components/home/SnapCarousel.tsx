"use client";
import Image from "next/image";

const slides = [
  { id: 1, title: "Colombo", img: "/images/Explore_Destinations/colombo.jpg" },
  { id: 2, title: "Galle", img: "/images/Explore_Destinations/galle.jpg" },
  { id: 3, title: "Kandy", img: "/images/Explore_Destinations/kandy.jpg" },
  { id: 4, title: "Ella", img: "/images/Explore_Destinations/ella.jpg" },
];

export default function SnapCarousel() {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory pb-4">
      <div className="flex gap-4 min-w-max px-4">
        {slides.map((s) => (
          <div key={s.id} className="snap-center shrink-0 w-[280px] overflow-hidden rounded-xl border border-black/10">
            <div className="relative h-40">
              <Image fill src={s.img} alt={s.title} className="object-cover" />
            </div>
            <div className="p-3 text-sm font-medium text-black">{s.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


