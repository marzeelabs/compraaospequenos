import wrapStyles from 'Styles/wrapStyles';

const styles = () => ({

  wrapper: {
    background: 'transparent',
    position: 'relative',
    width: '100%',
    minHeight: '40px',
    left: '44.64px',
    top: '10px',
    zIndex: '15',
    display: 'flex',
  },

  title: {
    color: '#ffffff',
    textDecoration: 'none',

    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '27px',
    textAlign: 'center',
    letterSpacing: '1px',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export default component => wrapStyles(styles, component);
