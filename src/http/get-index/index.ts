// deno-lint-ignore require-await
export async function handler () {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: `🦕 ${Deno.version.deno}`
  }
}
