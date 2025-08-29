// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { draftMode } from 'next/headers';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Optional: preview secret validation could be added here
  const redirectUrl = searchParams.get('redirect') || '/';

  // Enable Next.js draft mode
  draftMode().enable();

  // Redirect to the requested URL with no-store to avoid caching
  const response = NextResponse.redirect(redirectUrl);
  response.headers.set('Cache-Control', 'no-store, max-age=0');
  return response;
}


