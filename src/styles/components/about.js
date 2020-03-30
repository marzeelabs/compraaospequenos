import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
    maxWidth: 800,
    marginTop: theme.spacing(6.25),
    marginBottom: theme.spacing(12.5),
  },

  title: {
    marginBottom: theme.spacing(5),
    fontSize: '34px',
    lineHeight: '46px',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },

  descriptionWrapper: {
    marginBottom: theme.spacing(5),
  },

  description: {
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: '2px',
    textAlign: 'center',
    marginBottom: theme.spacing(1.5),

    '&:nth-child(n+4)': {
      marginBottom: theme.spacing(0),
    },
  },

  itemsWrapper: {
    position: 'relative',
    width: '100%',
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
    textAlign: 'center',
    marginBottom: theme.spacing(10),
  },

  icon: {
    width: 100,
    height: 100,
  },

  sectionHeading: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0.5),
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '34px',
  },

  sectionDescription: {
    fontSize: '16px',
    lineHeight: '32px',
    letterSpacing: '2px',
  },

  arrows: {
    position: 'absolute',
    top: '40px',
    left: '50%',
    transform: 'translateX(-50%)',

    '@media(max-width: 959px)': {
      transform: 'translateX(-50%) rotate(90deg)',
      top: '255px',
    },
  },

  button: {
    padding: '20px 40px',
    borderRadius: '60px',
    fontSize: '34px',
    lineHeight: '40px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'none',
  },
}));
