import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  link: {
    width: 36,
    height: 36,
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',
  },

  icon: {
    fontSize: 22,
  },
}));
