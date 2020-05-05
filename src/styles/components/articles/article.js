import { makeStyles } from '@material-ui/core/styles';

const tagPseudoElment = theme => ({
  content: '""',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'inline-block',
  width: 60,
  height: 1,
  pointerEvents: 'none',
  backgroundColor: theme.palette.text.primary,
});

export default makeStyles(theme => ({
  wrapper: {
    marginTop: 120,
    padding: '0 20px 40px',
  },

  titleWrapper: {
    position: 'relative',

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: -120,
      left: -20,
      pointerEvents: 'none',
      zIndex: -1,
      background: `linear-gradient(123.69deg, ${theme.palette.primary.main} 7.73%, ${theme.palette.secondary.main} 92.27%)`,
    },
  },

  title: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 46,
    lineHeight: '63px',
    letterSpacing: 2,
    color: theme.palette.primary.contrastText,
    marginBottom: 10,
  },

  date: {
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '25px',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 40,
  },

  hero: {
    margin: '0 auto',
    maxWidth: 980,

    '& > div': {
      // It's ridiculous we can't target this more easily...
      paddingBottom: '56.25% !important',
    },
  },

  copy: {
    margin: '70px auto',
    maxWidth: 780,
    fontSize: 18,
    lineHeight: '36px',
    letterSpacing: 2,

    '& h2': {
      margin: '30px 0',
    },

    '& li': {
      marginBottom: 30,
    },

    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },

  tags: {
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '25px',
    letterSpacing: 2,
    position: 'relative',
    marginBottom: 20,

    '&::before': tagPseudoElment(theme),
    '&::after': tagPseudoElment(theme),
  },

  tagsList: {
    listStyleType: 'none',
    margin: 0,
    padding: '20px 0',
  },

  tag: {
    display: 'inline-block',
    margin: '5px 10px',
    padding: 0,
  },

  socialTitle: {
    textAlign: 'center',
    fontWeight: 400,
    margin: '0 auto',
    letterSpacing: 2,
  },

  socialList: {
    textAlign: 'center',
    margin: '0 auto',
    padding: 0,
    listStyleType: 'none',
  },

  socialItem: {
    display: 'inline-block',
    margin: '20px 10px',
  },

  socialLink: {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
    transition: 'background-color ease .25s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
