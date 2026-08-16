// Renders resume/cv.html to public/media/Daniel_Butler_CV.pdf
//
//   npm run cv
//
// Edit cv.html, re-run, commit the PDF. The site links to the output from
// src/pages/about.jsx ("Download CV").

import { chromium } from 'playwright'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const here = path.dirname(fileURLToPath(import.meta.url))
const source = path.join(here, 'cv.html')
const output = path.join(here, '..', 'public', 'media', 'Daniel_Butler_CV.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()

await page.goto(`file://${source}`, { waitUntil: 'load' })
// Without this the PDF can render before JetBrains Mono swaps in.
await page.evaluate(() => document.fonts.ready)
await page.pdf({
  path: output,
  format: 'Letter',
  printBackground: true,
  // Margins live in cv.html's @page rule so the HTML preview matches the PDF.
  preferCSSPageSize: true,
})

await browser.close()
console.log(`wrote ${path.relative(process.cwd(), output)}`)
