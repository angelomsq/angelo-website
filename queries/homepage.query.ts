import { gql } from '@apollo/client'
import imageFragment from './fragments/image.fragment'
import containerFragment from './fragments/container.fragment'

const HOMEPAGE = gql`
  ${imageFragment}
  ${containerFragment}
  query Homepage {
    pages(filter: { url: { _eq: "/" } }) {
      id
      page_title
      page_image {
        ...imageFragment
      }
      page_description
      title
      url
      content
      blocks {
        item {
          ...containerFragment
        }
      }
    }
    projects {
      id
      title
      description
      content
      image {
        ...imageFragment
      }
      gallery {
        directus_files_id {
          ...imageFragment
        }
      }
      techs
      url
      source_url
      date
    }
  }
`

export default HOMEPAGE
