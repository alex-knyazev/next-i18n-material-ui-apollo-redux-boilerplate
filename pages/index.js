import withData from '@/hocs/withData';
import UsersCont from '@/containers/UsersCont';
import DefaultLayout from '@/components/DefaultLayout';

const IndexPage = (props) => {
  return (
    <DefaultLayout>
      <UsersCont />
    </DefaultLayout>
  );
};

export default withData(IndexPage);
