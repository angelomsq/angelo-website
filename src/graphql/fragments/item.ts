import { gql } from '@apollo/client'
import { imageFragment } from './image'
import { linkFragment } from './link'

export const itemFragment = gql`
  ${imageFragment}
  ${linkFragment}
  fragment itemFragment on Items {
    sys {
      id
    }
    title
    heading
    label
    description
    image {
      ...imageFragment
    }
    url
    linksCollection(limit: 3) {
      items {
        ...linkFragment
      }
    }
  }
`
