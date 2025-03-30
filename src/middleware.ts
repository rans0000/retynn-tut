import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// we'll use an array to list all the protected pages
const proptectedRoutes = ["/"];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  /**
   * we'll check if the route is heading to a protected route,
   * if so, we make sure our auth cookie is set.
   * If it isn't, we'll redirect hi to the login page.
   */
  if (proptectedRoutes.includes(request.nextUrl.pathname)) {
    const userId = request.cookies.get("userId");
    if (!userId) return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico, sitemap.xml, robots.txt (metadata files)
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
