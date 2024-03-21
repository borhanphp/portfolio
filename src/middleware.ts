import jwt_decode from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
interface JwtPayload {
  isAdmin?: boolean;
}

// Middleware function
export function middleware(request: NextRequest) {
  const token = request.cookies?.get("token")?.value || "";

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decoded: JwtPayload = jwt_decode(token);

  if (token && !decoded?.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Configuration for matching paths
export const config = {
  matcher: "/dashboard/:path*",
};
