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

  title: {
    color: theme.palette.primary.main,
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },

  offerType: {
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: '#2C2E30',
  },

  location: {
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: '#2C2E30',
    fontWeight: 'bold',
  },

  offer: {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '2px',
  },
}));
