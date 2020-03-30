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
}));
