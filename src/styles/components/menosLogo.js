import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  img: {
    margin: '0 auto',
    width: 220,
    height: 38,

    [theme.breakpoints.up('md')]: {
      width: 300,
      height: 42,
    },
  },
}));
