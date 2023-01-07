import { gql } from '@apollo/client'

const imageFragment = gql`
  fragment imageFragment on directus_files {
    id
    title
    description
    width
    height
  }
`

export default imageFragment
