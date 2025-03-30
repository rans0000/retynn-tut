import { NextRequest, NextResponse } from "next/server";

export function middleware(requset: NextRequest) {
  console.log(".....in middleware...", requset.nextUrl.href);
  console.log(requset.cookies.getAll());

  // return NextResponse.redirect("/");
  const response = NextResponse.next();
  response.cookies.set({ name: "mycookie", value: "7" });
  return response;
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
