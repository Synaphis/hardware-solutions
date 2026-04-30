import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware
 * Runs on the Edge/Node.js runtime.
 */
export function proxy(request: NextRequest) {
  // Clone request headers to modify them if needed
  const requestHeaders = new Headers(request.headers);
  
  // Add a unique request ID for tracking/logging
  const requestId = crypto.randomUUID();
  requestHeaders.set('x-request-id', requestId);

  // Initialize the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // --- SECURITY HEADERS ---
  
  // 1. Prevent Clickjacking (disallow embedding the site in frames)
  response.headers.set('X-Frame-Options', 'DENY');

  // 2. Prevent MIME Sniffing (force browser to follow Content-Type)
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 3. Referrer Policy (control how much info is sent when navigating away)
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  // 4. Strict Transport Security (force HTTPS)
  // Only applied if on Vercel or production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }

  // 5. XSS Protection (legacy header for older browsers)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // 6. Permissions Policy (restrict access to browser features)
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  // --- API SPECIFIC LOGIC ---
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Ensure API responses are never cached by browsers
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
  }

  // Add the request ID to the response headers as well for client-side correlation
  response.headers.set('x-request-id', requestId);

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - all images (png, jpg, jpeg, gif, svg)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|svg)$).*)',
  ],
};
