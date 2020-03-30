import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 800,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  itemsWrapper: {
    position: 'relative',
    width: '100%',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textAlign: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },

  icon: {
    width: 100,
    height: 100,
  },

  title: {
    marginBottom: theme.spacing(5),
  },

  description: {
    marginBottom: '1rem',
    textAlign: 'center',
  },

  sectionHeading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },

  arrows: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: 'translateY(-50%)',
  },

  button: {
    padding: '20px 40px;',
    borderRadius: '60px',
  },
}));
