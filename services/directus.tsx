import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'isomorphic-unfetch'

const httpLink = createHttpLink({
  fetch, // Switches between unfetch & node-fetch for client & server.
  uri: `${process.env.NEXT_PUBLIC_DIRECTUS_API_URI}/graphql`,
})

const directus = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
  },
})

export default directus
