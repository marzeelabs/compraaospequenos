import wrapStyles from 'Styles/wrapStyles';

const backgroundImage = 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
  },

  background: {
    backgroundImage: `url(${backgroundImage})`,
  },
});

export default component => wrapStyles(styles, component);
