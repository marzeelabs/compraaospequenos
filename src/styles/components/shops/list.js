import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
});

export default component => wrapStyles(styles, component);
