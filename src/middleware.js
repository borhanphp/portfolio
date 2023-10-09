import { NextRequest, NextResponse } from 'next/server';


export function middleware() {
    if ( NextRequest && NextRequest.nextUrl ) {
        const path = NextRequest.nextUrl.pathname;
        const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';
        const token = NextRequest.cookies?.get( 'token' )?.value || '';

        if ( isPublicPath && token ) {
            return NextResponse.redirect( new URL( '/', NextRequest.nextUrl ) );
        }

        if ( !isPublicPath && !token ) {
            return NextResponse?.redirect( new URL( '/login', NextRequest.nextUrl ) );
        }
    }
}



// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}