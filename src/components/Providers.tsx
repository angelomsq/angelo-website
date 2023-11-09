'use client'
import { ReactNode } from 'react'
import contentful from '@/services/contentful'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'next-themes'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

type ProvidersProps = {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ApolloProvider client={contentful}>
      <ThemeProvider enableSystem={true} attribute="class">
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          {children}
        </GoogleReCaptchaProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
