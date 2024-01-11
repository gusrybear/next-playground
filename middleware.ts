import { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let headers = { "accept-language": "" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en", "th"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = match(languages, locales, defaultLocale);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
