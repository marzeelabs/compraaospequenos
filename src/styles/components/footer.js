import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  title: {
    color: theme.palette.primary.contrastText,
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '19px',
    letterSpacing: '1px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  mainLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    marginTop: theme.spacing(2),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '1px',
    fontWeight: 700,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  mzLogo: {
    height: '64px',
    width: '100%',
    marginBottom: theme.spacing(2),
  },

  link: {
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: '20px',
    boxShadow: 'none',
    marginTop: theme.spacing(2),

    '&:nth-child(n+2)': {
      marginLeft: '16px',
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  icon: {
    color: theme.palette.primary.dark,

    'a:hover &': {
      color: theme.palette.primary.contrastText,
    },
  },
}));
