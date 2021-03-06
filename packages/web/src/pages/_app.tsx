import * as React from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import Head from "next/head"
import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import * as Sentry from "@sentry/react"
import { Integrations } from "@sentry/tracing"
import { theme } from "@boilerplate/theme"

import { useApollo } from "lib/apollo/client"
import { IS_PRODUCTION, SENTRY_DSN } from "lib/config"

if (IS_PRODUCTION) {
  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    enabled: IS_PRODUCTION,
    tracesSampleRate: 1.0,
  })
}
type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function BoilerplateApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props
  const apolloClient = useApollo(pageProps.initialApolloState)
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={apolloClient}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
      </ChakraProvider>
    </>
  )
}
