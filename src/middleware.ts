import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api/|_next/|_static/|assets/|[\\w-]+\\.\\w+).*)'],
};

export default async function middleware(req: NextRequest) {
  // const url = req.nextUrl;
  // const hostname = req.headers.get('host')!.replace('.localhost:3000', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
  // const searchParams = req.nextUrl.searchParams.toString();
  // const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ''}`;
  // const subDomain = hostname.split('.')[0];
  // switch (true) {
  //   case subDomain !== hostname:
  //     return NextResponse.rewrite(new URL(`/private/${subDomain}${path}`, req.url));
  //   default:
  //     return NextResponse.rewrite(new URL(`${path}`, req.url));
  // }
}
