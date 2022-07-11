import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const BASE_PATH = process.env.BASE_PATH || "";

export function locales(request) {
  const { nextUrl } = request;

  return;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(nextUrl.pathname) &&
    !nextUrl.pathname.includes("/api/") &&
    !nextUrl.pathname.includes("/_next/") &&
    nextUrl.locale !== "";
  if (!shouldHandleLocale) return;

  // Because of the localization the redirect using next.config.js is not working.
  // So we need to redirect manually.
  // -----------------------------------------
  if (nextUrl.pathname == "/") {
    return NextResponse.redirect(
      new URL(`${BASE_PATH}/introduction/overview`, request.url)
    );
  }
  // -----------------------------------------

  // The locale code prefixed in the current URL, which can be empty.
  const fullUrl = nextUrl.toString();
  const localeInPath = fullUrl
    .slice(fullUrl.indexOf("//" + nextUrl.host) + nextUrl.host.length + 3)
    .slice(0, -(nextUrl.pathname + nextUrl.search).length);

  let finalLocale;

  if (localeInPath) {
    // If a locale is explicitly set, we don't do any modifications.
    finalLocale = localeInPath;
  } else {
    // If there is a locale cookie, we try to use it. If it doesn't exist or
    // it's invalid, `nextUrl.locale` will be automatically figured out by Next
    // via the `accept-languages` header.
    if (request.cookies["NEXT_LOCALE"]) {
      try {
        nextUrl.locale = request.cookies["NEXT_LOCALE"];
      } catch (err) {
        // The locale from the cookie isn't valid.
        // https://github.com/vercel/next.js/blob/e5dee17f776dcc79ebb269f7b7341fa6e2b6c3f1/packages/next/server/web/next-url.ts#L122-L129
      }
    }
    finalLocale = nextUrl.locale;

    // Now we want to display the locale. If it's not the default one, we have
    // to prefix the URL with that locale since it's missing. Only the default
    // locale can be missing from there for consistency.
    if (finalLocale !== nextUrl.defaultLocale) {
      return NextResponse.redirect(
        new URL(
          "/" + finalLocale + nextUrl.pathname + nextUrl.search,
          request.url
        )
      );
    }
  }

  let pathname = nextUrl.pathname || "/";
  if (pathname === "/") pathname += "index";

  // If we are not showing the correct localed page, rewrite the current request.
  if (!pathname.endsWith("." + finalLocale)) {
    return NextResponse.rewrite(
      new URL(
        "/" + finalLocale + pathname + "." + finalLocale + nextUrl.search,
        request.url
      )
    );
  }
}

export function withLocales(middleware) {
  return (...args) => {
    return locales(args[0]) || middleware(...args);
  };
}

export const middleware = locales;

// export const middleware = withLocales((req, ev) => {
//   console.log(req.nextUrl);
//   const { pathname } = req.nextUrl;
//   console.log(pathname);
// });
