import { gql } from '@apollo/client'
import imageFragment from './image.fragment'

const itemFragment = gql`
  ${imageFragment}
  fragment itemFragment on items {
    id
    title
    heading
    label
    description
    image {
      ...imageFragment
    }
    url
  }
`

export default itemFragment
