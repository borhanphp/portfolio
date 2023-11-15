import jwt_decode from "jwt-decode";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Define the interface for the JWT payload
interface JwtPayload {
  isAdmin?: boolean;
  // Add other properties from your JWT payload if needed
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

  // Continue with the normal flow if the token is present and isAdmin is true
  // Add your logic here for the cases where the token is present and isAdmin is true
}

// Configuration for matching paths
export const config = {
  matcher: "/dashboard/:path*",
};
