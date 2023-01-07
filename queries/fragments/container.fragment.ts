import { gql } from '@apollo/client'
import imageFragment from './image.fragment'
import linkFragment from './link.fragment'
import itemFragment from './item.fragment'

const containerFragment = gql`
  ${imageFragment}
  ${linkFragment}
  ${itemFragment}
  fragment containerFragment on containers {
    id
    title
    anchor
    type
    heading
    label
    description
    image {
      ...imageFragment
    }
    background {
      ...imageFragment
    }
    items {
      items_id {
        ...itemFragment
      }
    }
    links {
      links_id {
        ...linkFragment
      }
    }
  }
`

export default containerFragment
