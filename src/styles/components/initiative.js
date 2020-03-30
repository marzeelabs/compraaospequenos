import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  title: {
    marginBottom: theme.spacing(14),
  },

  icon: {
    color: theme.palette.secondary.main,
  },
}));
