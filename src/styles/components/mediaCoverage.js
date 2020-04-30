import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#F6F8F9',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    maxWidth: 1280,
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),
  },

  title: {
    marginBottom: theme.spacing(5),
    fontSize: '34px',
    lineHeight: '46px',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },

  slide: {
    textDecoration: 'none',
  },

  subtitle: {
    fontSize: '16px',
    lineHeight: '19px',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.dark,
    display: '-webkit-box',
    '-webkit-line-clamp': '3',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },

  siteName: {
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '2px',
    textAlign: 'center',
    color: theme.palette.secondary.main,
  },

  image: {
    height: '200px',
    marginBottom: theme.spacing(1),
  },
}));
