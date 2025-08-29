function buildFrontendUrl(type: string, slug?: string | null): string {
  const baseUrl = (globalThis as any).process?.env?.NEXT_PUBLIC_SITE_URL || 'https://fairwayhotels.com';

  if (!slug) return baseUrl;

  switch (type) {
    case 'hotel':
      return `${baseUrl}/hotels/${slug}`;
    case 'tour':
      return `${baseUrl}/tours/${slug}`;
    case 'blog.post':
    case 'post':
      return `${baseUrl}/blog/${slug}`;
    default:
      return `${baseUrl}`;
  }
}

export default async function resolveProductionUrl(
  prev: string | undefined,
  context: any
): Promise<string> {
  // context includes the document and schema type
  const { document, schemaType } = context;
  const slug = (document as any)?.slug?.current || (document as any)?.slug;

  // Prefer existing url from prev if provided, else build one
  const typeName = (schemaType as any)?.name || (document as any)?._type;
  const url = prev || buildFrontendUrl(typeName, slug);

  return url;
}


