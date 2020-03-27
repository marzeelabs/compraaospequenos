import wrapStyles from 'Styles/wrapStyles';

const backgroundImage = 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    color: theme.palette.common.white,

    [theme.breakpoints.up('sm')]: {
      minHeight: 500,
      maxHeight: 1300,
      height: '80vh',
    },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
  },

  background: {
    position: 'absolute',
    zIndex: -2,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  backdrop: {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: theme.palette.common.black,
  },

  button: {
    minWidth: 200,
  },

  h5: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),

    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
});

export default component => wrapStyles(styles, component);
