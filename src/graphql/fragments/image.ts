import { gql } from '@apollo/client'

export const imageFragment = gql`
  fragment imageFragment on Asset {
    url
    description
    height
    width
  }
`
