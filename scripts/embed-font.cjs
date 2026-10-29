const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const fontPath = path.resolve(
  __dirname,
  '..',
  'src',
  'assets',
  'offline-assets',
  'fonts',
  'Baloo-Bhai-2',
  'Baloo-Bhai-2-Variable.woff2',
);
const fontUrl = `url(data:font/woff2;base64,${fs.readFileSync(fontPath).toString('base64')})`;
const externalFontUrls = [
  "url('../assets/offline-assets/fonts/Baloo-Bhai-2/Baloo-Bhai-2-Variable.woff2')",
  "url('./assets/offline-assets/fonts/Baloo-Bhai-2/Baloo-Bhai-2-Variable.woff2')",
];

function replaceInDirectory(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      replaceInDirectory(entryPath);
      continue;
    }

    if (!/\.(css|js|mjs|cjs)$/.test(entry.name)) continue;
    const contents = fs.readFileSync(entryPath, 'utf8');
    let updatedContents = contents;
    for (const externalFontUrl of externalFontUrls) {
      updatedContents = updatedContents.split(externalFontUrl).join(fontUrl);
    }
    if (updatedContents !== contents) {
      fs.writeFileSync(entryPath, updatedContents);
    }
  }
}

replaceInDirectory(distDir);
