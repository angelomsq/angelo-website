import Head from 'next/head'
import React from 'react'
import IImage from '../interfaces/image.interface'
import { getMediaURL } from '../plugins/helpers'

const constants = {
  companyName: 'Angelo Queiroz',
  siteUrl: 'https://angeloqueiroz.com',
  siteLogo: 'https://angeloqueiroz.com/images/logo.png',
  siteLogoSquare: 'https://angeloqueiroz.com/images/logo.png',
  email: 'contato@angeloqueiroz.com',
  twitter: 'https://twitter.com/angelomsq',
  twitterHandle: '@angelomsq',
  facebook: 'https://www.facebook.com/angelomsq',
  instagram: 'https://www.instagram.com/angelomsq',
  linkedin: 'https://www.linkedin.com/in/angelomsq',
}

interface ISeo {
  title: string
  description: string | null
  pagePath: string
  ogType: string
  image: IImage | null
}

const Seo: React.FC<ISeo> = ({ title, description, pagePath, ogType, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {description && <meta name="description" content={description} />}
      {/* twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={constants.twitterHandle} />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={getMediaURL(image.id)} />}
      {/* canonical link */}
      <link rel="canonical" href={constants.siteUrl + pagePath} />
      {/* open graph metadata */}
      <meta property="og:locale" content="en_UK" />
      <meta property="og:site_name" content={constants.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && (
        <>
          <meta property="og:image" content={getMediaURL(image.id)} />
          <meta property="og:image:width" content={image.width?.toString()} />
          <meta property="og:image:height" content={image.height?.toString()} />
        </>
      )}
      <meta property="og:url" content={constants.siteUrl + pagePath} />
    </Head>
  )
}

export default Seo
