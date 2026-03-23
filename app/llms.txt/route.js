export async function GET() {
  const fs = await import('fs')
  const path = await import('path')
  const content = fs.readFileSync(path.join(process.cwd(), 'public', 'llms.txt'), 'utf-8')
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}