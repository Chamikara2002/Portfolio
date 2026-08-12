import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(__dirname, '../dist');

async function prerender() {
  console.log('🚀 Starting post-build prerendering for static HTML...');
  
  // Start Vite official preview server
  const previewServer = await preview({
    root,
    preview: {
      port: 4173,
      strictPort: true
    }
  });

  const serverUrl = previewServer.resolvedUrls.local[0] || 'http://localhost:3000/';
  console.log(`🌐 Vite preview server running at ${serverUrl}`);

  try {
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    } catch (launchErr) {
      console.warn('⚠️ Default Puppeteer Chrome not found, trying system Chrome or Edge...');
      try {
        browser = await puppeteer.launch({
          headless: 'new',
          channel: 'chrome',
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
      } catch (e1) {
        browser = await puppeteer.launch({
          headless: 'new',
          channel: 'msedge',
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
      }
    }

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(serverUrl, { waitUntil: 'networkidle0' });

    // Wait for React to mount content into root
    await page.waitForSelector('#root > div', { timeout: 15000 });

    // Scroll through the page to trigger IntersectionObserver reveals
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 300;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 100);
      });
    });

    await new Promise(r => setTimeout(r, 500));

    // Get static DOM HTML
    let html = await page.content();

    // Post-process HTML to ensure Puppeteer DOM serialization doesn't turn async font styles into render-blocking media="all" stylesheets
    html = html.replace(
      /href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)" media="all"/g,
      'href="$1" media="print" onload="this.media=\'all\'"'
    );

    // Write back to dist/index.html
    const indexPath = path.join(distDir, 'index.html');
    fs.writeFileSync(indexPath, html, 'utf8');

    console.log('✅ Successfully prerendered full static HTML into dist/index.html!');

    await browser.close();
  } catch (error) {
    console.error('❌ Prerendering error:', error);
    process.exit(1);
  } finally {
    previewServer.httpServer.close();
  }
}

prerender();
