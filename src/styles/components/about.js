import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textAlign: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },

  mainTitle: {
    marginBottom: theme.spacing(5),
  },

  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },

  button: {
    padding: '20px 40px;',
    borderRadius: '60px',
  },
}));
