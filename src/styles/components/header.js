import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    background: theme.palette.secondary.main,
  },

  link: {
    color: theme.palette.secondary.contrastText,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default component => wrapStyles(styles, component);
