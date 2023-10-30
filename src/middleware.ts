import jwt_decode from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies?.get("token")?.value || "";
  const decoded = jwt_decode(token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (token && !decoded?.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
