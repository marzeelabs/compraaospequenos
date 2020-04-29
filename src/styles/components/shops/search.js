import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  textField: {
    width: '85%',
    maxWidth: 350,
    margin: '0 24px 30px',

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
