import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  mainLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  icon: {
    color: theme.palette.primary.dark,
  },
}));
