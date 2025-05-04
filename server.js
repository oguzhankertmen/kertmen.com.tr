import { createServer } from 'node:http'
import { parse } from 'node:url'
import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

const server = createServer(async (req, res) => {
  try {
    const parsedUrl = parse(req.url || '/', true)
    const pathname = parsedUrl.pathname || '/'

    // Statik dosyaları sun
    if (pathname.startsWith('/_next/static/')) {
      const filePath = join(process.cwd(), '.next', pathname)
      const file = await readFile(filePath)
      res.writeHead(200)
      res.end(file)
      return
    }

    // HTML dosyalarını sun
    const htmlPath = join(process.cwd(), '.next/server/pages', pathname === '/' ? 'index.html' : `${pathname}.html`)
    const html = await readFile(htmlPath, 'utf-8')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(html)
  } catch (error) {
    console.error(error)
    res.writeHead(500)
    res.end('Internal Server Error')
  }
})

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
}) 