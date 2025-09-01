import { NextRequest, NextResponse } from 'next/server';
import { indexHotel, indexTour, indexBlogPost, removeFromIndex } from '@/lib/meili';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, documentId, operation } = body;

    console.log(`Sanity webhook received: ${operation} ${type} ${documentId}`);

    // Verify webhook signature if needed
    // const signature = request.headers.get('x-sanity-signature');
    // if (!verifySignature(body, signature)) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    switch (operation) {
      case 'create':
      case 'update':
        await handleCreateOrUpdate(type, documentId);
        break;
      
      case 'delete':
        await handleDelete(documentId);
        break;
      
      default:
        console.log(`Unknown operation: ${operation}`);
        return NextResponse.json({ error: 'Unknown operation' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Sanity webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleCreateOrUpdate(type: string, documentId: string) {
  try {
    // Fetch the updated document from Sanity
    const document = await fetchDocumentFromSanity(documentId);
    
    if (!document) {
      console.log(`Document ${documentId} not found in Sanity`);
      return;
    }

    // Index based on document type
    switch (type) {
      case 'hotel':
        await indexHotel(document);
        console.log(`Indexed hotel: ${documentId}`);
        // Revalidate hotel-related pages
        revalidatePath('/hotels');
        revalidatePath('/');
        revalidateTag('hotels');
        break;
      
      case 'tour':
        await indexTour(document);
        console.log(`Indexed tour: ${documentId}`);
        // Revalidate tour-related pages
        revalidatePath('/tours');
        revalidatePath('/');
        revalidateTag('tours');
        break;
      
      case 'blog':
        await indexBlogPost(document);
        console.log(`Indexed blog post: ${documentId}`);
        // Revalidate blog-related pages
        revalidatePath('/blog');
        revalidatePath('/');
        revalidateTag('blog');
        break;
      
      case 'content':
        // Revalidate all content pages
        revalidatePath('/');
        revalidatePath('/about');
        revalidatePath('/contact');
        revalidateTag('content');
        console.log(`Revalidated content pages for: ${documentId}`);
        break;
      
      case 'settings':
        // Revalidate all pages when settings change
        revalidatePath('/', 'layout');
        revalidateTag('settings');
        console.log(`Revalidated all pages for settings update: ${documentId}`);
        break;
      
      default:
        console.log(`Unknown document type: ${type}`);
    }
  } catch (error) {
    console.error(`Error indexing ${type} ${documentId}:`, error);
    throw error;
  }
}

async function handleDelete(documentId: string) {
  try {
    await removeFromIndex(documentId);
    console.log(`Removed from index: ${documentId}`);
    
    // Revalidate all relevant pages after deletion
    revalidatePath('/');
    revalidatePath('/hotels');
    revalidatePath('/tours');
    revalidatePath('/blog');
    revalidateTag('hotels');
    revalidateTag('tours');
    revalidateTag('blog');
  } catch (error) {
    console.error(`Error removing ${documentId} from index:`, error);
    throw error;
  }
}

async function fetchDocumentFromSanity(documentId: string) {
  try {
    // Use Sanity client to fetch the document
    // This would typically use the Sanity client configured in your app
    const query = `*[_id == $documentId][0]`;
    const params = { documentId };
    
    // For now, we'll return null as the actual Sanity client integration
    // would depend on your specific setup
    console.log(`Would fetch document ${documentId} from Sanity`);
    return null;
    
    // Example with actual Sanity client:
    // const document = await sanityClient.fetch(query, params);
    // return document;
  } catch (error) {
    console.error(`Error fetching document ${documentId} from Sanity:`, error);
    return null;
  }
}

// Optional: Verify webhook signature for security
function verifySignature(body: any, signature: string | null): boolean {
  if (!signature) {
    console.warn('No signature provided in webhook');
    return false;
  }

  // Implement signature verification logic here
  // This would typically involve verifying the webhook payload
  // against the signature using your Sanity webhook secret
  
  // For now, return true (implement proper verification in production)
  return true;
}

// Handle GET requests (webhook verification)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const challenge = searchParams.get('challenge');
  
  if (challenge) {
    // Return the challenge for webhook verification
    return NextResponse.json({ challenge });
  }
  
  return NextResponse.json({ message: 'Sanity webhook endpoint' });
}
