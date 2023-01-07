import { gql } from '@apollo/client'

const linkFragment = gql`
  fragment linkFragment on links {
    id
    label
    description
    url
    download {
      id
      title
      type
    }
    external
    style
  }
`

export default linkFragment
