import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const title = `${params.slug.replace(/-/g, " ")}`;
  return {
    title,
    description: "Fairway Hotels journal article.",
    openGraph: { title, description: "Fairway Hotels journal article." },
  };
}

export default function BlogPostPage({ params }: Params) {
  const { slug } = params;
  return (
    <MainLayout>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <header>
          <h1 className="text-2xl sm:text-3xl font-serif capitalize">{slug.replace(/-/g, " ")}</h1>
          <p className="text-black/60 mt-2 text-xs sm:text-sm">Published on 16 Oct 2025</p>
        </header>
        <div className="prose prose-neutral mt-6 max-w-none text-sm sm:text-base">
          <p>
            This is a sample article for the Fairway Hotels journal. Replace this
            content with your story, design notes, or travel insights. Use
            headings, images, and quotes to create an engaging narrative.
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl">Designing for Tranquility</h2>
          <p>
            Our spaces are inspired by Sri Lanka’s landscapes—ocean blues,
            tea-green hills, and warm sands. Minimal lines and natural textures
            invite a slower rhythm.
          </p>
        </div>
      </article>
    </MainLayout>
  );
}


