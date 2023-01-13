// This script is run after the build process to patch the generated index.js file
// source: https://github.com/rayriffy/svelte-aio/blob/cc18ac6ec4c7d563aad5f1dc122ecc9829d42499/tools/bun-patcher.js#L6-L11

import fs from 'fs'
import path from 'path'

const targetFile = path.join(process.cwd(), 'build/index.js')

const originalContent = fs.readFileSync(targetFile, 'utf8')
fs.writeFileSync(
  targetFile,
  originalContent
    .replace('const server = new Server(manifest);', 'const server = new Server(manifest);\nawait server.init({ env: (Bun||process).env })')
)

console.log('Patched build server')
