/** @type {import('next').NextConfig} */
// const redirects = require('./public/json/redirects');

// const arrRedirects = [];
// const arrRewrites = [];
// let arrErrorRedirect = [];
// if (redirects) {
//   // console.log(redirects);
//   Object.keys(redirects).forEach((item) => {
//     if (redirects[item].url) {
//       try {
//         arrRedirects.push({
//           source: `/${
//             `${item}`.search('%') > -1 ? `${item}` : encodeURI(`${item}`)
//           }`,
//           destination: `/${redirects[item].url == '/' ? '' : redirects[item].url}`,
//           permanent: redirects[item].url.includes('http') ? false : true,
//           basePath: false,
//         });
//         arrRewrites.push({
//           source: `/${
//             `${item}`.search('%') > -1 ? `${item}` : encodeURI(`${item}`)
//           }`,
//           destination: `/${redirects[item].url}`,
//         });
//       } catch (e) {
//         // console.log(123);
//         arrErrorRedirect = [...arrErrorRedirect, redirects[item]];
//       }
//     }
//   });
// }

// console.log('redirects error: ', arrErrorRedirect);

// const redirectsConfig = async () => {
//   return arrRedirects;
// };

const nextConfig = {
  /* config options here */
  // redirects: redirectsConfig,
  staticPageGenerationTimeout: 1000,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'nasoo.school',
      },
    ],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
