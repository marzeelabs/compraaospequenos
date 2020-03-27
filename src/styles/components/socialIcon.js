import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  link: {
    color: theme.palette.secondary.contrastText,
    fontSize: 32,
    textDecoration: 'none',
  },
});

export default component => wrapStyles(styles, component);
