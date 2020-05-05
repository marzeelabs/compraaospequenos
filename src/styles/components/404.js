import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  wrapper: {
    padding: '200px 20px 120px',
    color: theme.palette.background,
    textAlign: 'center',
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: -1,
      background: `linear-gradient(123.69deg, ${theme.palette.primary.main} 7.73%, ${theme.palette.secondary.main} 92.27%)`,
    },
  },

  title: {
    fontWeight: 700,
    fontSize: 46,
    lineHeight: '63px',
    textAlign: 'center',
    letterSpacing: '2px',
    margin: '0 auto 60px',
  },

  img: {
    width: '100%',
    maxWidth: 675,
    display: 'inline-block',
  },

  message: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: '25px',
    textAlign: 'center',
    letterSpacing: '2px',
    margin: '60px auto 30px',
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  item: {
    display: 'inline-block',
    margin: '0 5px 10px',
  },

  link: {
    display: 'inline-block',
    backgroundColor: theme.palette.background,
    borderRadius: 100,
    padding: '10px 20px',
    fontSize: 16,
    fontWeight: 700,
    lineHeight: '26px',
    letterSpacing: '2px',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    transition: 'background-color ease .25s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
}));
