export async function GET() {
  const { readFileSync } = require('fs')
  const { join } = require('path')
  try {
    const content = readFileSync(join(process.cwd(), 'public', 'llms.txt'), 'utf-8')
    return new Response(content, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    })
  } catch {
    return new Response('Not found', { status: 404 })
  }
}