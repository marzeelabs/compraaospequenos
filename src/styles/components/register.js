import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      backgroundBlendMode: 'screen, normal',
      zIndex: 5,
      opacity: 0.75,
    },
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 800,
    position: 'relative',
    zIndex: 10,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
    marginLeft: 'auto',
    marginRight: 'auto',
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },

  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    fontSize: 34,
    fontWeight: 700,
  },

  list: {
    margin: '16px auto 0',
    maxWidth: '80%',
    color: theme.palette.primary.contrastText,
    fontSize: 16,
    textAlign: 'left',
  },

  button: {
    marginTop: theme.spacing(8),
    padding: '20px 40px',
    borderRadius: '60px',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.contrastText,
    fontSize: '34px',
    lineHeight: '40px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'none',

    '&:hover': {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));
