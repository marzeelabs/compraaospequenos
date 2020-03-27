import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  mainLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  icon: {
    color: theme.palette.primary.dark,
  },
});

export default component => wrapStyles(styles, component);
