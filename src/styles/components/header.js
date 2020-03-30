import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '15',
    width: '100%',
    background: 'transparent',
  },

  container: {
    width: '100%',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',

    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '27px',
    letterSpacing: '1px',

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
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '1px',
    marginLeft: '20px',

    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  },

  activeLink: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.contrastText,
    border: '1px',
    boderColor: theme.palette.primary.contrastText,
    borderRadius: '50px',
    padding: '10px 20px',
  },
}));
