import { NextRequest, NextResponse } from 'next/server';


export function middleware() {
    if ( NextRequest && NextRequest.nextUrl ) {
        const path = NextRequest.nextUrl.pathname;
        const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail';
        const token = NextRequest.cookies?.get( 'token' )?.value || '';

        if ( token ) {
            return NextResponse.redirect( new URL( '/dashboard', NextRequest.nextUrl ) );
        } else {
            return NextResponse?.redirect( new URL( '/login', NextRequest.nextUrl ) );
        }

        // if ( !token ) {
        //     return NextResponse?.redirect( new URL( '/login', NextRequest.nextUrl ) );
        // }
    }
}



export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}