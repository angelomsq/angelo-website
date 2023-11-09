import { gql } from '@apollo/client'

export const linkFragment = gql`
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
