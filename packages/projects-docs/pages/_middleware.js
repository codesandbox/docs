import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const BASE_PATH = process.env.BASE_PATH || "";

export function locales(request) {
  const { nextUrl } = request;

  // Because of the localization the redirect using next.config.js is not working.
  // So we need to redirect manually.
  // -----------------------------------------
  if (nextUrl.pathname == "/") {
    return NextResponse.redirect(
      new URL(`${BASE_PATH}/introduction/overview`, request.url)
    );
  }
  // -----------------------------------------
}

export const middleware = locales;
