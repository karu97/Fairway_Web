"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
            <Image
              src="/images/fairway_hotels_logo.png"
              alt="Fairway Hotels"
              width={170}
              height={50}
              className="rounded"
              priority={false}
              quality={85}
            />
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
            <Link href="/contact" className="ml-2 px-4 py-2 rounded-full text-sm text-white bg-gradient-to-r from-black to-neutral-700 hover:opacity-90">Book Now</Link>
          </nav>
          <button
            className="md:hidden relative p-3 rounded-xl border border-black/20 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block h-0.5 w-5 bg-black transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`block h-0.5 w-5 bg-black transform transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-5 bg-black transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-all duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
            {/* Header */}
            <div className="px-6 py-6 flex items-center justify-between border-b border-black/10 bg-gradient-to-r from-white to-gray-50">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src="/images/fairway_hotels_logo.png"
                  alt="Fairway Hotels"
                  width={120}
                  height={35}
                  className="rounded"
                  priority={false}
                  quality={85}
                />
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-black/10 transition-colors duration-200"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-6 py-4 flex flex-col space-y-1">
              {navItems.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-black/5 hover:translate-x-2 ${
                      active
                        ? "text-black bg-black/10 border-l-4 border-black"
                        : "text-black/70 hover:text-black"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        active ? "bg-black scale-100" : "bg-black/30 scale-0 group-hover:scale-100"
                      }`} />
                      {item.label}
                    </span>
                    {active && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Section */}
            <div className="px-6 py-6 border-t border-black/10 bg-gradient-to-r from-gray-50 to-white">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Book Your Stay</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="px-6 py-6 border-t border-black/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">Call Us</div>
                    <a href="tel:+94722509609" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      +94 72 250 9609
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black">Email Us</div>
                    <a href="mailto:info@hotelsfairway.com" className="text-sm text-green-600 hover:text-green-700 font-medium break-all">
                      info@hotelsfairway.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


