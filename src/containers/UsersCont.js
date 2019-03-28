import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Users from '@/components/Users';

const FILMS_LIST_QUERY = gql`
  {
    allUsers {
      id
      firstName
    }
  }
`;

const IndexCont = (props) => {
  return (
    <Query query={FILMS_LIST_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { allUsers } = data;
        return <Users usersData={allUsers} />;
      }}
    </Query>
  );
};

export default IndexCont;
