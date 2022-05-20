export async function handler() {
  const myUUID = crypto.randomUUID();
  const resp = await fetch("https://api.github.com/users/tbeseda");
  const arcGitHub = await resp.json();

  return {
    statusCode: 200,
    headers: { "content-type": "text/html; charset=utf8" },
    body: `
      <p>🎲 ${myUUID}</p>
      <p>🦖 ${Deno.version.deno}</p>
      <p><pre>${JSON.stringify(arcGitHub, null, 2)}</pre></p>
    `,
  };
}
