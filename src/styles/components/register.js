import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 800,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  title: {
    marginBottom: theme.spacing(14),
  },

  content: {
    textAlign: 'center',
  },

  list: {
    textAlign: 'left',
  },

  button: {
    marginTop: theme.spacing(8),
  },
}));
