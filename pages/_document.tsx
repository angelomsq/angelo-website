import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-us" className="dark scroll-smooth">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta name="robots" content="index, follow" />
        </Head>
        <body className="font-primary text-tertiary dark:text-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
