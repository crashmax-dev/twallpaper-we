import { readFile, writeFile } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = resolve(__dirname, '..', 'dist', 'index.html')

readFile(file, (err, value) => {
  if (err) throw err

  const html = value.toString().replace('type="module" ', '')
  const htmlBuffer = new Uint8Array(Buffer.from(html))

  writeFile(file, htmlBuffer, (err) => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
