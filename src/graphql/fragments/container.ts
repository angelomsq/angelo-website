import { gql } from '@apollo/client'
import { imageFragment } from './image'
import { itemFragment } from './item'
import { linkFragment } from './link'

export const containerFragment = gql`
  ${imageFragment}
  ${linkFragment}
  ${itemFragment}
  fragment containerFragment on Containers {
    sys {
      id
    }
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
    itemsCollection(limit: 30) {
      items {
        ...itemFragment
      }
    }
    linksCollection(limit: 3) {
      items {
        ...linkFragment
      }
    }
  }
`
