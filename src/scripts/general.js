// // import path from 'path';
// // import fs from 'fs';
// const path = require('path');
// const fs = require('fs/promises');
// const axios = require('axios').default;
// const { API_URL } = require('../../env');

// async function isExists(path) {
//   try {
//     await fs.access(path);
//     return true;
//   } catch {
//     return false;
//   }
// }

// const generateStatics = async () => {
//   const jsonDirectory = path.join(process.cwd(), 'public/json');
  

//   const dirname = jsonDirectory;
//   const exist = await isExists(dirname);
//   try {
//     if (!exist) {
//       await fs.mkdir(jsonDirectory, { recursive: true }, (err) => {
//         if (err) throw err;
//       });
//     }
//   } catch (err) {
//     throw new Error(err);
//   }

//   axios.get(API_URL + '/general').then(async (res) => {
//     let contentJS = ``;
//     for (let element in res.data) {
//       contentJS = `
//         module.exports = ${JSON.stringify(res.data[element])};
//             `;
//       await fs.writeFile(
//         jsonDirectory + `/${element}.js`,
//         contentJS,
//         { flag: 'w' },
//         function (err) {
//           if (err) return console.error(err);
//           fs.readFile(
//             jsonDirectory + '/general_js.js',
//             'utf-8',
//             function (err, data) {
//               if (err) return console.error(err);
//               console.log(data);
//             }
//           );
//         }
//       );
//     }

//     await fs.writeFile(
//       jsonDirectory + '/general.json',
//       JSON.stringify(res.data),
//       { flag: 'w' },
//       function (err) {
//         if (err) return console.error(err);
//         fs.readFile(
//           jsonDirectory + '/general.json',
//           'utf-8',
//           function (err, data) {
//             if (err) return console.error(err);
//             console.log(data);
//           }
//         );
//       }
//     );


//   });
// };

// generateStatics();

// module.exports = generateStatics;
