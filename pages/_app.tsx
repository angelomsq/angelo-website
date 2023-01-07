import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import directus from '../services/directus'
import Layout from '../components/Layout'
import SITE from '../queries/site.query'
import ISite from '../interfaces/site.interface'
import IMenu from '../interfaces/menu.interface'

interface IApp extends AppProps {
  site: ISite
  menu: IMenu[]
}

const MyApp = ({ Component, pageProps, site, menu }: IApp) => {
  return (
    <ApolloProvider client={directus}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout site={site} menu={menu}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async () => {
  const { data } = await directus.query({ query: SITE })

  return {
    site: data.site,
    menu: data.menu.items,
  }
}

export default MyApp
