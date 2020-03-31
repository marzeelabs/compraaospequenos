import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      paddingTop: 60,
      paddingBottom: 100,
    },

    [theme.breakpoints.up('md')]: {
      maxHeight: 1300,
      minHeight: 500,
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(119.21deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 96.67%)`,
      backgroundBlendMode: 'screen, normal',
      zIndex: 5,
      opacity: 0.75,
    },
  },

  content: {
    position: 'relative',
    zIndex: 10,
    marginBottom: theme.spacing(5),

    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0),
    },
  },

  button: {
    display: 'inline-block',
    marginTop: theme.spacing(7.5),
    padding: '20px 40px',
    borderRadius: 60,
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: `
      0px 3px 1px -2px rgba(0,0,0,0.2),
      0px 2px 2px 0px rgba(0,0,0,0.14),
      0px 1px 5px 0px rgba(0,0,0,0.12)`,
    color: theme.palette.primary.dark,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1.75,
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: `
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;`,

    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
      padding: '12px 24px',
      fontSize: 18,
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `
        0px 2px 4px -1px rgba(0,0,0,0.2),
        0px 4px 5px 0px rgba(0,0,0,0.14),
        0px 1px 10px 0px rgba(0,0,0,0.12)`,
      color: theme.palette.primary.contrastText,
    },
  },

  title: {
    fontWeight: 700,

    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
    },
  },

  subtitle: {
    margin: '20px auto',

    [theme.breakpoints.up('md')]: {
      margin: '40px auto',
    },
  },

  fold: {
    position: 'absolute',
    zIndex: 20,
    left: '50%',
    bottom: -4,
    height: 64,
    maxWidth: 980,
    width: 'calc(100% - 80px)',
    transform: 'translateX(-50%)',
    borderRadius: '20px 20px 0 0',
    background: theme.palette.background,

    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 64px)',
      height: 48,
    },
  },

  innerFold: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    color: theme.palette.text.hint,
    fontSize: 16,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));
