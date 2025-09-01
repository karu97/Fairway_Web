import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/sanity';
import { BlogHero } from '@/components/BlogHero';
import { BlogContent } from '@/components/BlogContent';
import { BlogAuthor } from '@/components/BlogAuthor';
import { RelatedPosts } from '@/components/RelatedPosts';
import { generateSchemasFromOptions } from '@/lib/schema';
import { config } from '@/lib/config';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on our travel blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on our travel blog.`,
      images: post.heroImage ? [post.heroImage.url] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : [],
    },
  };
}

export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Generate params for all supported locales
  for (const locale of config.site.supportedLocales) {
    try {
      const posts = await getBlogPosts(locale);
      const localeParams = posts.map((post) => ({
        slug: post.slug,
      }));
      params.push(...localeParams);
    } catch (error) {
      console.warn(`Failed to generate static params for locale ${locale}:`, error);
    }
  }
  
  // Remove duplicates based on slug
  const uniqueParams = params.filter((param, index, self) => 
    index === self.findIndex(p => p.slug === param.slug)
  );
  
  console.log(`Generated ${uniqueParams.length} unique blog post paths`);
  return uniqueParams;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Try to find the blog post in any locale
  let post = null;
  
  for (const locale of config.site.supportedLocales) {
    try {
      post = await getBlogPost(params.slug, locale);
      if (post) {
        console.log(`Found blog post ${post.title} in locale ${locale}`);
        break;
      }
    } catch (error) {
      console.warn(`Failed to fetch blog post ${params.slug} in locale ${locale}:`, error);
    }
  }
  
  if (!post) {
    console.warn(`Blog post not found with slug: ${params.slug} in any locale`);
    notFound();
  }

  const schemas = generateSchemasFromOptions({
    blog: {
      headline: post.title,
      description: post.excerpt || '',
      url: `${config.site.url}/blog/${post.slug}`,
      image: post.heroImage?.url || '',
      author: post.author?.name || 'Fairway Hotels',
      datePublished: post.publishedAt,
      dateModified: post.publishedAt, // Assuming no modification tracking for now
    },
    includeOrganization: true,
    breadcrumbs: {
      items: [
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: `/blog/${post.slug}` }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BlogHero post={post} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Blog Content */}
            <BlogContent post={post} />

            {/* Author Info */}
            {post.author && <BlogAuthor author={post.author} />}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Related Posts */}
              <RelatedPosts currentSlug={post.slug} tags={post.tags} />
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
    </div>
  );
}
