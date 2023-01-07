import { gql } from '@apollo/client'
import imageFragment from './fragments/image.fragment'

const SITE = gql`
  ${imageFragment}
  query MyQuery {
    site {
      id
      title
      logo {
        ...imageFragment
      }
      instagram
      linkedin
      github
      whatsapp
      youtube
      discord
    }
    menu {
      id
      title
      items
    }
  }
`

export default SITE
