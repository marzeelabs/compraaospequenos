import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  panel: {
    background: 'transparent',
    boxShadow: 'none',

    '&::before': {
      display: 'none',
    },
  },

  items: {
    display: 'block',
  },

  item: {
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },

  summary: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '2px',
    color: '#2C2E30',
  },
}));
