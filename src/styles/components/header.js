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
    textAlign: 'center',
    letterSpacing: '1px',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
