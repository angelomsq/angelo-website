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
  }
`

export default HOMEPAGE
