import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  media: {
    height: 265,
  },

  tag: {
    display: 'block',
    marginBottom: 4,
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 2,
    lineHeight: '19px',
    textDecoration: 'none',
  },

  title: {
    display: 'block',
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 2,
    lineHeight: '33px',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  date: {
    display: 'block',
    color: theme.palette.text.primary,
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: 2,
    lineHeight: '19px',
    textDecoration: 'none',
  },

  excerpt: {
    display: 'block',
    margin: '8px 0',
    color: theme.palette.text.primary,
    fontSize: 16,
    letterSpacing: 2,
    lineHeight: '28px',
    textDecoration: 'none',
  },

  actions: {
    padding: '0 8px',
  },

  link: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 100,
    padding: '10px 20px',
    fontSize: 16,
    lineHeight: '26px',
    letterSpacing: 2,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    transition: 'background-color ease .25s',

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
