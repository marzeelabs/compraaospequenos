import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    width: 'calc(100% - 36px)',
    maxWidth: 400,
    margin: '0 18px 30px',

    '& .MuiInput-underline::before': {
      borderBottomColor: '#ddd',
    },
  },

  label: {
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '2px',
    color: '#999',
  },
});
