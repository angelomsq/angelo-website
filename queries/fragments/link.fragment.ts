import { gql } from '@apollo/client'

const linkFragment = gql`
  fragment linkFragment on Links {
    sys {
      id
    }
    label
    description
    url
    download {
      url
    }
    external
    style
  }
`

export default linkFragment
