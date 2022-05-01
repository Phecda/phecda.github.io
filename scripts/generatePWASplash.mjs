import pwaGenerator from 'pwa-asset-generator';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

const source = path.join(__dirname, '../public/favicon.svg');
const outputPath = path.join(__dirname, '../public/');
const indexHTMLPath = path.join(__dirname, '../index.html');

pwaGenerator.generateImages(source, outputPath, {
  background: '#673ab8',
  index: indexHTMLPath,
  type: 'png',
  splashOnly: true,
  pathOverride: '',
  padding: 'calc(50vmin - 20%)',
});
