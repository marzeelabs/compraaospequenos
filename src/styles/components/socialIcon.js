import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  link: {
    color: theme.palette.secondary.contrastText,
    fontSize: 32,
    textDecoration: 'none',
  },
}));
