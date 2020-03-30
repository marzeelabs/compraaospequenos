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
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  title: {
    fontSize: '20px',
    lineHeight: '27px',
    letterSpacing: '1px',
    fontWeight: '800',
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.contrastText,
  },

  subtitle: {
    fontSize: '16px',
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.contrastText,
  },

  link: {
    backgroundColor: theme.palette.secondary.contrastText,
    width: '20px',
    height: 0,
    minHeight: '20px',
    boxShadow: 'none',

    '&:nth-child(n+2)': {
      marginLeft: '16px',
    },
  },

  icon: {
    color: theme.palette.secondary.main,
    fontSize: '14px',
  },
}));
