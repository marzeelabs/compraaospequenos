import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 15,
    width: '100%',
    background: 'transparent',

    // We're hiding the whole header for now on mobile, which looks redundant with teh hero block.
    // We can implement in the future a proper mobile menu.
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  container: {
    position: 'relative',
    width: '100%',
    minHeight: 60,
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    flex: '1 1 auto',
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
    color: theme.palette.secondary.dark,
    background: theme.palette.primary.contrastText,
    fontSize: 16,
    textDecoration: 'none',
    border: 1,
    boderColor: theme.palette.primary.contrastText,
    borderRadius: 50,
    padding: '10px 20px',
  },
}));
