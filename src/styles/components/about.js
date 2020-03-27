import wrapStyles from 'Styles/wrapStyles';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary,
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },

  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});

export default component => wrapStyles(styles, component);
