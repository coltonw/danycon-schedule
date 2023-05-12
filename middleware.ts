// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidUsername } from './lib/usernames';

export function middleware(request: NextRequest) {
  // Getting cookies from the request
  const cookie = request.cookies.get('username');
  if (cookie && isValidUsername(cookie?.value)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/',
};
