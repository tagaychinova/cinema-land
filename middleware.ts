import acceptLanguage from 'accept-language';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

import { cookieName, fallbackLng, languages } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'],
};

function getLanguage(request: NextRequest) {
    if (request.cookies.has(cookieName)) {
        return acceptLanguage.get((request.cookies.get(cookieName) as RequestCookie).value);
    }

    return acceptLanguage.get(request.headers.get('Accept-Language')) || fallbackLng;
}

export function middleware(request: NextRequest) {
    const lng = getLanguage(request);

    // Redirect if lng in path is not supported
    if (
        !languages.some((loc) => request.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !request.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${request.nextUrl.pathname}`, request.url));
    }

    if (request.headers.has('referer')) {
        const refererUrl = new URL(request.headers.get('referer') as string);
        const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
        const response = NextResponse.next();

        if (lngInReferer) {
            response.cookies.set(cookieName, lngInReferer);
        }

        return response;
    }

    return NextResponse.next();
}
