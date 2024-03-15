const path = require('path');
const fs = require('fs/promises');
// const FS = require('fs');
const SVGO = require('svgo');
const { readdir } = require('fs').promises;

//

// const getFileList = async (dirName, recursive = false) => {
//   let files = [];
//   const items = await readdir(dirName, { withFileTypes: true });
//   let i = 0;
//   for (const item of items) {
//     if (item.isDirectory()) {
//       files = [
//         ...files,
//         ...(await getFileList(`${dirName}/${item.name}`, true)),
//       ];
//     } else {
//       if (item.name.endsWith('.jsx')) {
//         let jsx = await fs.readFile(`${dirName}/${item.name}`, 'utf8');
//         jsx = JSON.stringify(jsx);
//         // jsx = jsx.replace(/\s+/g, ' ').trim();
//         const regex = /<Icon.*src=\\"(.*)\\"\\/gm;
//         let m;
//         while ((m = regex.exec(jsx)) !== null) {
//           if (m.index === regex.lastIndex) {
//             regex.lastIndex++;
//           }

//           if (!files.includes(m[1])) {
//             files.push(m[1]);
//           }
//         }
//       }
//     }
//   }
//   return files;
//   // return [...new Set(files)];
// };

async function isExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

// function sanitizeName(text) {
//   let words = text.split(/\s|_|-/);

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
//   }
//   words = words.join('');

//   return words;
// }

const generateIconComp = async () => {
  const iconDirectory = path.join(
    process.cwd(),
    'src/components/common/icon/svgSprit/'
  );
  // const compDir = path.join(process.cwd(), 'src/components');
  const svgDirectory = path.join(process.cwd(), 'public/icons/nasoo/');

  const dirname = iconDirectory;
  const exist = await isExists(dirname);

  try {
    if (!exist) {
      await fs.mkdir(iconDirectory, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
  } catch (err) {
    throw new Error(err);
  }

  const svgFiles = await readdir(svgDirectory);
  const svgo = new SVGO({
    plugins: [
      {
        removeDimensions: true,
        removeXMLNS: true,
        cleanupListOfValues: true,
        removeStyleElement: true,
        removeScriptElement: true,
        reusePaths: true,
      },
    ],
  });
  let allSymbols = '';
  for (let i = 0; i < svgFiles.length; i++) {
    if (svgFiles[i].endsWith('.svg')) {
      const item = svgFiles[i];
      const exist = await isExists(svgDirectory + item);
      let compName = item.split('.')[0];
      try {
        if (exist) {
          // compName = sanitizeName(compName);
          let svgFile = await fs.readFile(svgDirectory + item, 'utf8');
          const optimizedSvgString = await svgo.optimize(svgFile, {
            multipass: true,
          });

          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /<svg/gi,
            `<symbol id="${compName}"`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /clip-path/gi,
            `clipPath`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /clip-rule/gi,
            `clipRule`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /fill-rule/gi,
            `fillRule`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /stroke-miterlimit/gi,
            `strokeMiterlimit`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /stroke-width/gi,
            `strokeWidth`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /class/gi,
            `className`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /stop-color/gi,
            `stopColor`
          );
          optimizedSvgString.data = optimizedSvgString.data.replaceAll(
            /<\/svg>/gi,
            '</symbol> \n'
          );

          allSymbols = allSymbols + ' ' + optimizedSvgString.data;
        } else {
          console.log(`${svgDirectory + item + '.svg'} => file not find :( `);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  let comp = `
    const SvgSprit = () => {
      return (
        <svg style={{display:'none'}}>

        ${allSymbols}

        </svg>
      );
    };
    SvgSprit.displayName = 'SvgSprit';
    export default SvgSprit;
    `;
  fs.writeFile(iconDirectory + 'svgSprit.jsx', comp, function (err) {
    if (err) {
      return console.log(err);
    }
  });
  try {
    if (!exist) {
      await fs.mkdir(iconDirectory, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
  } catch (err) {
    throw new Error(err);
  }
};

generateIconComp();

module.exports = generateIconComp;
