import React from 'react'
import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import {theme} from '../styles/theme'
import {SidebarDrawerProvider} from '../contexts/SidebarDrawerContext'
import {makeServer} from '../services/mirage'
import {queryClient} from '../services/queryClient'
import {AuthProvider} from '../contexts/AuthContext'

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
