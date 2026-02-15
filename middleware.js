import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Check if the user is trying to access protected areas
  const isProtectedPath = request.nextUrl.pathname.startsWith('/training/dashboard');
  
  // 2. Check for an auth token (for now, we'll check for a dummy cookie)
  const authToken = request.cookies.get('warrior_session');

  // 3. If they are on a protected path without a token, redirect to login
  if (isProtectedPath && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Only run the middleware on these specific paths
export const config = {
  matcher: ['/training/dashboard/:path*'],
};