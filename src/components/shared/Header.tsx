"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/shared/ThemeToggle";

type HeaderProps = {
  scrolled?: boolean;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/hotels", label: "Hotels" },
  { href: "/tours", label: "Tours" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header({ scrolled }: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:block bg-black text-white text-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 py-2 px-4">
          <div className="tracking-wide">Luxury stays • Curated tours • Sri Lanka</div>
          <div className="flex items-center gap-6">
            <a href="tel:+94722509609" className="opacity-90 hover:opacity-100 transition">📞 +94 72 250 9609</a>
            <a href="mailto:info@hotelsfairway.com" className="opacity-90 hover:opacity-100 transition">✉️ info@hotelsfairway.com</a>
          </div>
        </div>
      </div>
      <div className="h-0.5 bg-black/10">
        <div className="h-0.5 bg-gradient-to-r from-black via-neutral-700 to-black" style={{ width: `${progress}%` }} />
      </div>
      <div className={`backdrop-blur supports-[backdrop-filter]:bg-white/70 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/fairway_hotels_logo.png" alt="Fairway Hotels" width={170} height={50} className="rounded" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative text-sm transition ${active ? "text-black" : "text-black/60 hover:text-black"}`}
                >
                  {item.label}
                  <span className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-black transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })}
            <ThemeToggle />
            <Link href="/contact" className="ml-2 px-4 py-2 rounded-full text-sm text-white bg-gradient-to-r from-black to-neutral-700 hover:opacity-90">Book Now</Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-md border border-black/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? "✕" : "☰"}</span>
          </button>
        </div>
        <div className={`md:hidden fixed inset-0 z-40 transition ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
            <div className="px-4 py-4 flex items-center justify-between border-b border-black/10">
              <Link href="/" className="font-semibold tracking-wide text-lg">Fairway <span className="text-neutral-500">Hotels</span></Link>
              <button aria-label="Close" onClick={() => setOpen(false)} className="p-2">✕</button>
            </div>
            <nav className="px-4 py-3 flex flex-col">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="py-3 text-sm text-black/80 border-b border-black/10">
                  {item.label}
                </Link>
              ))}
              <div className="py-4 flex items-center gap-3">
                <ThemeToggle />
                <Link href="/contact" className="px-4 py-2 rounded-full text-sm text-white bg-black">Book Now</Link>
              </div>
              <div className="pt-2 pb-6 text-xs text-black/60">
                <a href="tel:+94722509609" className="block">📞 +94 72 250 9609</a>
                <a href="mailto:info@hotelsfairway.com" className="block">✉️ info@hotelsfairway.com</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}


