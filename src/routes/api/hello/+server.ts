export async function GET() {
  return new Response(JSON.stringify({
    runtime: process.versions.bun ? 'Bun' : 'Node',
    version: process.versions.bun ?? process.versions.node
  }));
}
