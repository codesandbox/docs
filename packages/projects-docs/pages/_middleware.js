import { NextResponse } from "next/server";

export function middleware() {
  console.log(nextUrl.pathname);
  if (nextUrl.pathname == "/") {
    return NextResponse.redirect(
      new URL(`${nextUrl.basePath}/learn/introduction/overview`, request.url)
    );
  }
}
