import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.background,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 800,
    marginBottom: theme.spacing(12),
  },

  title: {
    marginBottom: theme.spacing(5),
    fontSize: '34px',
    lineHeight: '46px',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },

  descriptionWrapper: {
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: '2px',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },

  description: {
    marginBottom: theme.spacing(2),
  },

  button: {
    padding: '20px 40px',
    borderRadius: '60px',
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `
      0px 3px 1px -2px rgba(0,0,0,0.2),
      0px 2px 2px 0px rgba(0,0,0,0.14),
      0px 1px 5px 0px rgba(0,0,0,0.12)`,
    color: theme.palette.secondary.contrastText,
    fontSize: '34px',
    fontWeight: 'bold',
    lineHeight: '40px',
    letterSpacing: '2px',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none',
    transition: `
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;`,

    [theme.breakpoints.down('sm')]: {
      padding: '12px 24px',
      fontSize: 22,
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      boxShadow: `
        0px 2px 4px -1px rgba(0,0,0,0.2),
        0px 4px 5px 0px rgba(0,0,0,0.14),
        0px 1px 10px 0px rgba(0,0,0,0.12)`,
    },
  },

  scroll: {
    marginBottom: theme.spacing(12),
  },
}));
