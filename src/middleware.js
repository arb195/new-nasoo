import { NextResponse, userAgent } from 'next/server';

function shouldExclude(request) {
  const path = request.nextUrl.pathname;

  return (
    path.startsWith('/api') || //  exclude all API routes
    path.startsWith('/static') ||
    path.startsWith('/assets') || //assets
    path.startsWith('/_next') || // exclude static files
    path.includes('.') // exclude all files in the public folder
  );
}
const sendOtp = async (url, data) => {
  // console.log(url, data);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};
export function middleware(request) {
  // const redirect_1 = Object.keys(redirects)[4];
  // const redirects_arr = Object.keys(redirects);
  // const redirect_path = redirects_arr.find((url) => {
  //     let decodeUrl = '';
  //     try{
  //       decodeUrl = `/${decodeURI(url)}/`;
  //     }catch(err){
  //       decodeUrl = url;
  //     }
  //     if(decodeURI(request.nextUrl.pathname) == decodeUrl){
  //       return url;
  //     }
  // });

  // if(redirect_path){
  //   return NextResponse.redirect(new URL(`/${redirects[redirect_path]?.url}`, request.url));
  // }
  // console.log(redirect_path);
  // throw new Error(123);
  // console.log(redirects_arr);
  // Object.keys(redirects)?.map((item) => {
  //   if(decodeURI(request.nextUrl.pathname) == `/${decodeURI(item)}/`){
  //     return NextResponse.redirect(new URL(`/${decodeURI(redirects[item]?.url)}/`, request.url));
  //   }
  // })

  // const pathname = request.nextUrl.pathname;

  // if(decodeURI(redirect_1) == pathname){
  //   console.log(" ******************************************************** ");
  // }

  // throw new Error(request.nextUrl.clone());
  // debugger;
  // const url = request.nextUrl.clone();
  // if (!shouldExclude(request)) {
  // console.log('------------------------------------------------------------------');
  // }

  // if (request.nextUrl.pathname.startsWith('/404')) {
  //   throw new Error(123);
  // }

  // if(!shouldExclude(request)){
  //  if(NextResponse.next().status == 404){
  //   return NextResponse.redirect(new URL('/404', request.url));
  //  }else if(NextResponse.next().status == 200){
  //   return NextResponse.redirect(new URL('/404', request.url));
  //  }
  // }
  if (request.nextUrl.pathname.match(/wp-json\/wp_sms_login(.*)$/)) {
    // console.log('send opt start');
    const pathname = request.nextUrl.pathname.replace('wp-json', 'rest');
    // request.nextUrl.host = 'api.nasoo.com:80';
    // request.nextUrl.port = '80';
    // request.nextUrl.pathname = pathname;
    // console.log(request);
    // return NextResponse.redirect(request.nextUrl);
    const url = 'https://api.nasoo.com' + pathname;
    // console.log(url);
    const data = {
      ep: request.nextUrl.searchParams.get('ep'),
    };
    const res = sendOtp(url, data)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  }
  const userInfo = request.cookies.get('usersInfo');
  const { device } = userAgent(request);

  if (userInfo) {
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.redirect(new URL('/personal-meet', request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith('/personal-meet')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // if (request.nextUrl.pathname == '/individual-meet') {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/my-account/:path*', '/users/:path*', '/:slug*', '/users'],
};
