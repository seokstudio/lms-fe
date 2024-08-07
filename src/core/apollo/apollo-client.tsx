'use client'

import { from, HttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

import { PropsWithChildren } from 'react'

// error link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  // graphQL error
  // if (graphQLErrors) {
  //   graphQLErrors.forEach(({ message }: { message: string; extensions: any }) => {
  //     customToast(message.replace('Exception', ''), 'error')
  //   })
  // }
  // // network error
  // if (networkError && !graphQLErrors) {
  //   customToast(networkError.message.replace('Exception', ''), 'error')
  // }
})

// make client
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    credentials: 'include',
  })

  // return
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
      mutate: { awaitRefetchQueries: true },
    },
  })
}

// apollo client provider
export const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  // return
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
