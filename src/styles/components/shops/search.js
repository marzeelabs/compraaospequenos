import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    width: '85%',
    maxWidth: 350,
    margin: '0 15px 30px',

    '& .MuiInput-underline::before': {
      borderBottomWidth: 2,
    },
  },

  label: {
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
  },
}));
