import { gql } from '@apollo/client'

const imageFragment = gql`
  fragment imageFragment on Asset {
    url
    description
    height
    width
  }
`

export default imageFragment
