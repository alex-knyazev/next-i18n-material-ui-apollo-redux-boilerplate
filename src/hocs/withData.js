import * as React from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import 'isomorphic-fetch';
import apolloClient from '@/base/apolloClient/init';
import initReduxStore from '@/store/init';

export default (Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.apolloClient = apolloClient({}, '', this.props.apolloState);
      this.reduxStore = initReduxStore(this.props.reduxState);
    }

    static async getInitialProps(ctx) {
      let apolloState = {};
      let serverState = {};

      const props = {
        router: {
          url: { query: ctx.query, pathname: ctx.pathname },
        },
        ...(await (typeof Component.getInitialProps === 'function'
          ? Component.getInitialProps(ctx)
          : {})),
      };

      if (!process.browser) {
        const client = apolloClient({}, '', {});
        const store = initReduxStore();

        try {
          const app = (
            <ApolloProvider client={client}>
              <ReduxProvider store={store}>
                <Component {...props} />
              </ReduxProvider>
            </ApolloProvider>
          );
          await getDataFromTree(app);
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://github.com/apollographql/react-apollo/issues/406
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }

        apolloState = client.cache.extract();
        serverState = store.getState();
      }

      return {
        reduxState: serverState,
        apolloState,
        ...props,
      };
    }

    apolloClient;

    reduxStore;

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <ReduxProvider store={this.reduxStore}>
            <Component {...this.props} />
          </ReduxProvider>
        </ApolloProvider>
      );
    }
  };
