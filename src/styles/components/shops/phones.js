import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  link: {
    display: 'block',
    padding: theme.spacing(1, 0),
    color: theme.palette.text.primary,
    fontSize: 14,
    textDecoration: 'none',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    },
  },

  icon: {
    margin: theme.spacing(0, 1),
  },
}));
