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
    // [theme.breakpoints.down('sm')]: {
    //   display: 'none',
    // },
  },

  container: {
    position: 'relative',
    width: '100%',
    minHeight: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: 0,
    },
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

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  navigationLink: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '22px',
    letterSpacing: 1,
    padding: '10px 20px',
    margin: '0 2px',
    display: 'inline-block',

    [theme.breakpoints.down('sm')]: {
      padding: '4px 8px',
      margin: '0 2px 4px',
      fontSize: 14,
    },

    '&:hover, &:focus': {
      color: theme.palette.secondary.dark,
      background: theme.palette.primary.contrastText,
      textDecoration: 'none',
      border: 1,
      borderColor: theme.palette.primary.contrastText,
      borderRadius: 50,
    },
  },

  activeLink: {
    color: theme.palette.secondary.dark,
    background: theme.palette.primary.contrastText,
    textDecoration: 'none',
    border: 1,
    borderColor: theme.palette.primary.contrastText,
    borderRadius: 50,
  },
}));
