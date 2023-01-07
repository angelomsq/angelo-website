export const getMediaURL = (id: string) => {
  return process.env.NEXT_PUBLIC_DIRECTUS_API_URI + '/assets/' + id
}
