import { withStyles } from '@material-ui/core/styles';
import { withNamespaces } from '../../i18n';

const Users = (props) => {
  const { usersData, t, classes } = props;
  const namesTitle = t('namesTitle');
  return (
    <div className={classes.root}>
      Other component with namespacesHoc
      <h1>{namesTitle}</h1>
      {usersData.map((u) => (
        <p key={u.id}>{u.firstName}</p>
      ))}
    </div>
  );
};

const styles = {
  root: {
    padding: 20,
    background: 'rgba(0,0,0,0.1)',
  },
};

export default withNamespaces('common')(withStyles(styles)(Users));
