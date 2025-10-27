"use client";
import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BackToTop from "@/components/shared/BackToTop";
import WhatsAppChat from "@/components/shared/WhatsAppChat";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
}


