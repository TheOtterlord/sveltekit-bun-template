export async function GET() {
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: {
      version: process.version
    }
  };
}
