import withData from '@/hocs/withData';
import UsersCont from '@/containers/UsersCont';
import DefaultLayout from '@/components/DefaultLayout';

const IndexPage = (props) => {
  return (
    <DefaultLayout>
      <UsersCont />
    </DefaultLayout>
  );
  // for some reason if you return only UsersCont, SSR isn't broken
  // return <UsersCont />;
};

export default withData(IndexPage);
