import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      width: 'auto',
      maxWidth: 'calc(50% - 30px)',
    },

    [theme.breakpoints.up('lg')]: {
      width: 'auto',
      maxWidth: 'calc(33% - 30px)',
    },
  },

  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
  },

  focusHighlight: {
    backgroundColor: theme.palette.primary.main,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    marginBottom: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },

  offerType: {
    marginBottom: theme.spacing(1.5),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
  },

  location: {
    marginBottom: theme.spacing(1),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },

  businessType: {
    marginBottom: theme.spacing(0.5),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
  },

  offer: {
    marginBottom: theme.spacing(1.5),
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '2px',
  },
}));
