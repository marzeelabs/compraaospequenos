import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',

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
  },
}));
