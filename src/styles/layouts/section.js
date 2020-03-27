import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    margin: '0 auto',
    padding: theme.spacing(1.5, 2),
  },

  container: {
    maxWidth: 1120,
  },
});

export default component => wrapStyles(styles, component);
