import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Toggle from '@/components/Toggle'
import { SITE } from '@/graphql/queries'
import contentful from '@/services/contentful'
import { Site } from '@/types'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: {
    default: 'Welcome',
    template: `%s | Angelo Queiroz`,
  },
  description: 'Welcome to Angelo Queiroz Website',
  openGraph: {
    type: 'website',
    url: 'https://angeloqueiroz.com',
    title: 'Angelo Queiroz Website',
    description: 'Software Engineer website from Angelo Queiroz',
    siteName: 'Angelo Queiroz Website',
    images: [
      {
        url: 'https://angeloqueiroz.com/images/logo.png',
      },
    ],
  },
}

type LayoutProps = {
  children: React.ReactNode
}
export const revalidate = 60 * 60 * 24 // 1 day

export default async function RootLayout({ children }: LayoutProps) {
  const { data } = await contentful.query({ query: SITE })
  const site: Site = data.site
  return (
    <html lang="en" className="dark scroll-smooth sm:snap-y sm:snap-mandatory">
      <body className="bg-main font-primary text-tertiary dark:bg-background dark:text-main">
        <div className="h-screen w-full">
          <Providers>
            <Header {...site} />
            <Menu menu={site.mainMenuCollection.items} />
            <Toggle />
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
              {children}
            </main>
            <ToastContainer position="bottom-right" theme="colored" />
          </Providers>
        </div>
      </body>
    </html>
  )
}
