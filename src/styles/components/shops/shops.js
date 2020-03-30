import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  content: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  filters: {
    minWidth: 300,
    maxWidth: 300,

    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      maxWidth: 'none',
      flexGrow: 1,
    },
  },

  list: {
    flexGrow: 3,
    width: '100%',
  },

  ul: {
    justifyContent: 'center',
  },

  listSection: {
    marginTop: theme.spacing(5),
  },

  shopsTotal: {
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '2px',
    marginBottom: theme.spacing(2),
  },
}));
