import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request: NextRequest) {
	// Generate nonce for CSP
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
	const isProd = process.env.NODE_ENV === 'production';
	const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' plausible.io frfmelwyegduccbcrmck.supabase.co vercel.live${
		isProd ? '' : " 'unsafe-eval'"
	};
    script-src-elem 'self' 'nonce-${nonce}' plausible.io frfmelwyegduccbcrmck.supabase.co vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    connect-src 'self' plausible.io frfmelwyegduccbcrmck.supabase.co vercel.live;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors https://rmcguiness.com https://mcg-consulting.vercel.app https://mcg-consulting.xyz/;
    upgrade-insecure-requests;
  `;
	// Replace newline characters and spaces
	const contentSecurityPolicyHeaderValue = cspHeader
		.replace(/\s{2,}/g, ' ')
		.trim();

	// Create new headers with CSP and nonce
	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-nonce', nonce);
	requestHeaders.set(
		'Content-Security-Policy',
		contentSecurityPolicyHeaderValue
	);

	// Create initial response with updated headers
	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		},
	});

	// Set CSP header on response
	response.headers.set(
		'Content-Security-Policy',
		contentSecurityPolicyHeaderValue
	);

	// Update session with the original request
	const sessionResponse = await updateSession(request);

	// If updateSession returns a redirect, return it (with CSP/nonce headers)
	if (sessionResponse.status === 307 || sessionResponse.status === 302) {
		sessionResponse.headers.set(
			'Content-Security-Policy',
			contentSecurityPolicyHeaderValue
		);
		sessionResponse.headers.set('x-nonce', nonce);
		return sessionResponse;
	}

	// Merge the session response with our CSP headers
	response.headers.set(
		'Content-Security-Policy',
		contentSecurityPolicyHeaderValue
	);
	response.headers.set('x-nonce', nonce);

	// Copy over any cookies from the session response
	sessionResponse.cookies.getAll().forEach((cookie) => {
		response.cookies.set(cookie);
	});

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Feel free to modify this pattern to include more paths.
		 */
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
};
