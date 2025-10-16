import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Insights, guides, and stories from Fairway Hotels.",
};

const posts = Array.from({ length: 6 })
  .map((_, i) => ({
    slug: `post-${i + 1}`,
    title: `Designing Calm Spaces ${i + 1}`,
    excerpt: "How we craft soothing interiors and experiences across Sri Lanka.",
    date: "2025-10-16",
  }))
  // Hide the first placeholder post
  .filter((p) => p.slug !== "post-1");

export default function BlogIndexPage() {
  return (
    <MainLayout>
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-serif">Journal</h1>
        <p className="text-black/70 mt-2">Stories, design notes, and travel inspiration.</p>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-xl border border-black/10 p-5 hover:shadow-sm transition">
              <div className="text-xs text-black/50">{new Date(p.date).toLocaleDateString()}</div>
              <h3 className="mt-2 font-medium">{p.title}</h3>
              <p className="text-sm text-black/60 mt-1">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="inline-block mt-3 text-sm text-black/70 hover:text-black">Read more →</Link>
            </article>
          ))}
        </div> */}
      </section>
    </MainLayout>
  );
}


