import { containerFragment, imageFragment } from '@/graphql/fragments'
import { gql } from '@apollo/client'

export const HOMEPAGE = gql`
  ${imageFragment}
  ${containerFragment}
  query Homepage {
    pages: pagesCollection(where: { url: "/" }, limit: 1) {
      items {
        sys {
          id
        }
        seoTitle
        seoImage {
          ...imageFragment
        }
        seoDescription
        title
        url
        content {
          json
        }
        blocks: blocksCollection(limit: 12) {
          items {
            ...containerFragment
          }
        }
      }
    }
    projects: projectsCollection(limit: 10, order: date_DESC) {
      items {
        sys {
          id
        }
        title
        description
        content {
          json
        }
        image {
          ...imageFragment
        }
        gallery: galleryCollection {
          items {
            ...imageFragment
          }
        }
        techs
        url
        sourceUrl
        date
      }
    }
  }
`
