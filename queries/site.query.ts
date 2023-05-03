import { gql } from '@apollo/client'
import imageFragment from './fragments/image.fragment'

const SITE = gql`
  ${imageFragment}
  query MySite {
    site(id: "1Kzxki6CO5EFwSURjkuWVu", preview: ${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW}) {
      sys {
        id
      }
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
      mainMenuCollection {
        items {
          label
          url
        }
      }
    }
  }
`

export default SITE
