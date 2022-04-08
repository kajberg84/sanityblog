import { createClient, createCurrentUserHook } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-04-06',
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'production',
}

// Använder detta för data fetching i getProps page functionen
export const sanityClient = createClient(config)

/*
Set up a helper function for gerneratin image urls with only the asset reference data in your documents.
läs mer på https://www.sanity.io/docs/image-url
*/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)
