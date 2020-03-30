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
    fontWeight: 700,
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.contrastText,
  },

  subtitle: {
    fontSize: '16px',
    marginBottom: theme.spacing(2.5),
    color: theme.palette.secondary.contrastText,
  },

  menosLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2.5),
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '1px',
    fontWeight: 700,

    '&:hover': {
      background: 'none',
      textDecoration: 'underline',
    },
  },

  link: {
    backgroundColor: theme.palette.secondary.contrastText,
    minHeight: '20px',
    boxShadow: 'none',

    '&:nth-child(n+2)': {
      marginLeft: '16px',
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },

  icon: {
    color: theme.palette.secondary.main,

    'a:hover &': {
      color: theme.palette.secondary.contrastText,
    },
  },
}));
