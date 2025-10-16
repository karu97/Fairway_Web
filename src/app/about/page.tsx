import MainLayout from "@/components/layout/MainLayout";
import TeamSection from "@/components/shared/TeamSection";

export const metadata = {
  title: "About",
  description: "The Fairway Hotels story, mission, and values.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-serif">About Fairway Hotels</h1>
        <p className="text-black/70 mt-3">We are a Sri Lankan hospitality brand inspired by contemporary design and authentic local experiences. Our mission is to craft moments of calm, comfort, and discovery.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-medium">Design</div>
            <p className="text-sm text-black/60 mt-1">Timeless interiors, natural textures, and thoughtful details.</p>
          </div>
          <div>
            <div className="font-medium">Sustainability</div>
            <p className="text-sm text-black/60 mt-1">Local sourcing, eco-friendly amenities, and mindful operations.</p>
          </div>
          <div>
            <div className="font-medium">Experience</div>
            <p className="text-sm text-black/60 mt-1">Curated tours and personalized service for every guest.</p>
          </div>
        </div>
      </section>
      <TeamSection />
    </MainLayout>
  );
}



