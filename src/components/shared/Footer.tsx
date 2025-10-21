import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black mt-12">
      <div className="absolute -top-6 left-0 right-0" aria-hidden>
        <svg viewBox="0 0 1440 80" width="100%" height="80" preserveAspectRatio="none">
          <path d="M0,64 C 240,0 480,0 720,64 C 960,128 1200,128 1440,64 L1440,80 L0,80 Z" fill="#ffffff" stroke="#e5e5e5" className="dark:fill-black dark:stroke-neutral-700"/>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
        <Image src="/images/fairway_hotels_logo.png" alt="Fairway Hotels" width={170} height={50} className="rounded" />
        <p className="mt-3 text-sm text-black/60 dark:text-white/60 max-w-sm">Luxury stays and curated tours across Sri Lanka. Thoughtful design, warm service, and unforgettable journeys.</p>
          <div className="flex items-center gap-4 mt-4 text-black/60">
            <a href="#" aria-label="Facebook" className="hover:text-black dark:hover:text-white">𐄷</a>
            <a href="#" aria-label="Instagram" className="hover:text-black dark:hover:text-white">◎</a>
            <a href="#" aria-label="X" className="hover:text-black dark:hover:text-white">𝕏</a>
          </div>
        </div>
        <div>
          <div className="font-medium text-black dark:text-white">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm text-black/70 dark:text-white/70">
            <li><Link href="/hotels" className="hover:text-black dark:hover:text-white">Hotels</Link></li>
            <li><Link href="/tours" className="hover:text-black dark:hover:text-white">Tours</Link></li>
            <li><Link href="/blog" className="hover:text-black dark:hover:text-white">Blog</Link></li>
            <li><Link href="/about" className="hover:text-black dark:hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-black dark:hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-black dark:text-white">Gallery</div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { src: "/images/Meshendra_Garden/Main Image.png", href: "/hotels/meshendra-garden" },
              { src: "/images/Meshendra_Garden/6.png", href: "/hotels/meshendra-garden" },
              { src: "/images/E34_hotel_koslanda/2.JPG", href: "/hotels/e34-koslanda" },
              { src: "/images/E34_hotel_koslanda/3.JPG", href: "/hotels/e34-koslanda" },
              { src: "/images/Meshendra_Garden/4.png", href: "/hotels/meshendra-garden" },
              { src: "/images/E34_hotel_koslanda/5.JPG", href: "/hotels/e34-koslanda" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="relative aspect-square rounded-md overflow-hidden border border-black/10 dark:border-white/10">
                <Image fill src={item.src} alt="Hotel gallery image" className="object-cover" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="font-medium text-black dark:text-white">Newsletter</div>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="Your email" className="w-full border border-black/20 dark:border-white/20 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 bg-white dark:bg-black text-black dark:text-white" />
            <button type="submit" className="px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black text-sm">Subscribe</button>
          </form>
          <div className="mt-4 text-sm text-black/70 dark:text-white/70">
            📞 +94 72 250 9609
            <br /> ✉️ info@hotelsfairway.com
            <br /> 📍 Colombo, Sri Lanka
          </div>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10 py-4 text-center text-xs text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Fairway Hotels. All rights reserved.
      </div>
    </footer>
  );
}


