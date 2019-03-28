import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';

let apolloClient = null;

function createClient(headers, token, initialState) {
  return new ApolloClient({
    headers,
    link: new HttpLink({
      uri: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default (headers, token, initialState) => {
  if (!process.browser) {
    return createClient(headers, token, initialState);
  }
  if (!apolloClient) {
    apolloClient = createClient(headers, token, initialState);
  }
  return apolloClient;
};
