import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  wrapper: {
    padding: theme.spacing(0.5, 0),
  },

  link: {
    margin: theme.spacing(0, 0.5),
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: 'none',
    color: theme.palette.text.primary,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
}));
