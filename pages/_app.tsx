import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import contentful from '../services/contentful'
import Layout from '../components/Layout'
import SITE from '../queries/site.query'
import ISite from '../interfaces/site.interface'
import IMenu from '../interfaces/menu.interface'

interface IApp extends AppProps {
  site: ISite
}

const MyApp = ({ Component, pageProps, site }: IApp) => {
  return (
    <ApolloProvider client={contentful}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout site={site}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async () => {
  const { data } = await contentful.query({ query: SITE })

  return {
    site: data.site,
  }
}

export default MyApp
