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
    lineHeight: '19px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },

  mainLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    marginTop: theme.spacing(2.5),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '1px',
    fontWeight: 800,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  mzLogo: {
    height: '50px',
    width: '100%',
    marginBottom: theme.spacing(2.5),
  },

  link: {
    backgroundColor: theme.palette.primary.contrastText,
    width: '20px',
    height: 0,
    minHeight: '20px',
    boxShadow: 'none',
    marginTop: theme.spacing(2.5),

    '&:nth-child(n+2)': {
      marginLeft: '16px',
    },
  },

  icon: {
    color: theme.palette.primary.dark,
    fontSize: '14px',
  },
}));
