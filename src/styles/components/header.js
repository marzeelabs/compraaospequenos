import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 15,
    width: '100%',
    background: 'transparent',
  },

  container: {
    position: 'relative',
    width: '100%',
    minHeight: 60,
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',

    fontWeight: 700,
    fontSize: 20,
    lineHeight: '27px',
    letterSpacing: 1,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  navigation: {
    position: 'absolute',
    right: '40px',
  },

  navigationLink: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '22px',
    letterSpacing: 1,
    marginLeft: 20,

    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },

  activeLink: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.contrastText,
    fontSize: 16,
    textDecoration: 'none',
    border: 1,
    boderColor: theme.palette.primary.contrastText,
    borderRadius: 50,
    padding: '10px 20px',
  },
}));
