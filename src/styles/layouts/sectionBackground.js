import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -10,
    filter: 'grayscale(100%) brightness(.8)',
  },
});
