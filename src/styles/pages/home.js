import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  hero: {
    [theme.breakpoints.up('md')]: {
      height: '65vh',
      minHeight: 650,
    },
  },
}));
