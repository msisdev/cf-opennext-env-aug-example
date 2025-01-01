import { getCloudflareContext } from "@opennextjs/cloudflare"

export async function GET(request: Request) {
  const { env } = await getCloudflareContext()
  const { WHICH_ENV } = env

  return new Response(`Hello, ${WHICH_ENV}`)
}
