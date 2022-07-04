// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidUsername } from './lib/usernames';

export function middleware(request: NextRequest) {
  // Getting cookies from the request
  const username = request.cookies.get('username');
  if (username && isValidUsername(username)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/',
};
