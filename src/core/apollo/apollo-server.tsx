import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'

import { languageTag } from '@/core/localization/paraglide/runtime'

// apollo server client
export const { getClient } = registerApolloClient(() => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    credentials: 'include',
    headers: {
      'Next-Locale': `${languageTag()}`,
    },
  })

  // return
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
})
