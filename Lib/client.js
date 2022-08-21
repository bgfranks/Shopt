import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'ho7g9klh',
  dataset: 'production',
  apiVersion: '2022-08-20',
  useCdn: true,
  token: process.env.SANIT_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
