"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Mail, Phone, X } from "lucide-react";

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
            <a href="tel:+94722509609" className="opacity-90 hover:opacity-100 transition flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              +94 72 250 9609
            </a>
            <a href="mailto:info@hotelsfairway.com" className="opacity-90 hover:opacity-100 transition flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              info@hotelsfairway.com
            </a>
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
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
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
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-6 py-4 flex flex-col space-y-1 bg-white">
              {navItems.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`group relative py-4 px-4 rounded-xl text-base font-medium transition-all duration-300 hover:bg-black/5 hover:translate-x-2 ${active
                        ? "text-black bg-black/10 border-l-4 border-black"
                        : "text-black/70 hover:text-black"
                      }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full transition-all duration-300 ${active ? "bg-black scale-100" : "bg-black/30 scale-0 group-hover:scale-100"
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
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="px-6 py-6 border-t border-black/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
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
                    <Mail className="w-5 h-5 text-white" />
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


