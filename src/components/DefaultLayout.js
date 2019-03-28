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
      <p>
        I am trying to use apollo and next i18 next together. <br />
        For some reason if you return only UsersCont from Index page component,
        SSR is not broken
      </p>
      <p>Here we have Some component with withNamespaces hoc</p>
      <Query query={FILMS_LIST_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { allUsers } = data;
          return <UsersAmountData allUsers={allUsers} />;
        }}
      </Query>
      {props.children}
    </div>
  );
};

const UsersAmountData = withNamespaces('common')((props) => {
  const namesTitle = props.t('namesTitle');
  return `${namesTitle} amount: ${props.allUsers.length}`;
});

const styles = {
  root: {
    margin: 20,
  },
};

export default withStyles(styles)(DefaultLayout);
