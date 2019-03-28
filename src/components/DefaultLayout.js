import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withNamespaces } from '../../i18n';

const FILMS_LIST_QUERY = gql`
  {
    allUsers {
      id
      firstName
    }
  }
`;

const DefaultLayout = (props) => {
  const { classes, t } = props;
  return (
    <div className={classes.root}>
      <p>I am trying to use apollo and next i18 next together</p>
      <p>Here we have Some component with withNamespaces hoc</p>
      <Query query={FILMS_LIST_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { allUsers } = data;
          const namesTitle = t('namesTitle');

          return `${namesTitle} amount: ${allUsers.length}`;
        }}
      </Query>
      {props.children}
    </div>
  );
};

const styles = {
  root: {
    margin: 20,
  },
};

export default withNamespaces('common')(withStyles(styles)(DefaultLayout));
