import { createClient } from '@prismicio/client'

export function getPrismicClient() {

  const client = createClient(

    process.env.PRISMIC_ENDPOINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    })

  return client
}