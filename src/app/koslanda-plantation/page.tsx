import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Koslanda Plantation | Parent Company of Fairway Hotels",
  description:
    "Koslanda Plantation Private Limited is a leading agriculture company specializing in the cultivation and production of high-quality vanilla. Learn about our parent company and its connection to Fairway Hotels.",
  keywords: [
    "Koslanda Plantation",
    "Koslanda Plantation Private Limited",
    "vanilla plantation",
    "vanilla cultivation",
    "Sri Lanka vanilla",
    "Fairway Hotels parent company"
  ],
  openGraph: {
    title: "Koslanda Plantation | High-Quality Vanilla Cultivation",
    description:
      "Koslanda Plantation Private Limited is a leading agriculture company specializing in high-quality vanilla cultivation and production.",
    url: "https://www.hotelsfairway.com/koslanda-plantation",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/fairway_hotels_hero.png",
        width: 1200,
        height: 630,
        alt: "Koslanda Plantation - Vanilla Cultivation"
      }
    ]
  },
  twitter: {
    title: "Koslanda Plantation | High-Quality Vanilla",
    description:
      "Koslanda Plantation Private Limited is a leading agriculture company specializing in high-quality vanilla cultivation and production.",
    images: [
      {
        url: "https://www.hotelsfairway.com/images/fairway_hotels_hero.png",
        alt: "Koslanda Plantation"
      }
    ]
  },
  alternates: {
    canonical: "https://www.hotelsfairway.com/koslanda-plantation",
  },
};

export default function KoslandaPlantationPage() {
  return (
    <MainLayout>
      <article className="mx-auto max-w-5xl px-4 py-10">
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-serif">Koslanda Plantation</h1>
          <p className="text-sm sm:text-base text-black/70">
            Koslanda Plantation Private Limited is a leading agriculture company specializing in the cultivation and production of high-quality vanilla.
          </p>
        </header>

        <section className="mt-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-medium">Official Website</h2>
          <p className="text-sm sm:text-base text-black/70">
            Visit the official Koslanda Plantation website:
            {" "}
            <Link
              href="https://www.koslandaplantation.com"
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              https://www.koslandaplantation.com
            </Link>
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-medium">Relationship to Fairway Hotels</h2>
          <p className="text-sm sm:text-base text-black/70">
            Koslanda Plantation is the parent company of Fairway Hotels. Fairway Hotels operates luxury boutique hotels and curated experiences in Sri Lanka, including our Koslanda destination.
          </p>
        </section>
      </article>
    </MainLayout>
  );
}
