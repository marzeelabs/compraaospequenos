import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    flexGrow: 1,
    width: '100%',
    margin: 15,
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'visible',
    transitionProperty: 'box-shadow, transform',

    [theme.breakpoints.up('md')]: {
      width: 'calc(50% - 30px)',
      maxWidth: 'calc(50% - 30px)',
    },

    [theme.breakpoints.up('lg')]: {
      width: 'calc(33% - 30px)',
      maxWidth: 'calc(33% - 30px)',
    },
  },

  cardActive: {
    zIndex: 10,
    transform: 'scale(1.1)',

    [theme.breakpoints.up('md')]: {
      transform: 'scale(1.2)',
    },

    '& .MuiCollapse-wrapper': {
      opacity: 1,
    },
  },

  actionArea: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%',
    borderRadius: '10px',
  },

  actionAreaActive: {
    backgroundColor: theme.palette.background,
    borderRadius: '10px 10px 0 0',
  },

  focusHighlight: {
    backgroundColor: theme.palette.primary.main,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 0,
  },

  title: {
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },

  offerType: {
    marginBottom: theme.spacing(1),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
  },

  location: {
    marginBottom: theme.spacing(1),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },

  businessType: {
    marginBottom: theme.spacing(1),
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '2px',
    color: theme.palette.text.primary,
  },

  offer: {
    margintop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '2px',
  },

  cardActions: {
    flex: '1 1 auto',
  },

  expand: {
    transform: 'rotate(0deg)',
    zIndex: 5,
    margin: '0 auto',
    padding: 0,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: 'rotate(180deg)',
  },

  collapse: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: theme.palette.background,
    borderRadius: '0 0 10px 10px',
    boxShadow: '0 10px 35px rgba(0, 0, 0, 0.1)',
  },

  collapseWrapper: {
    backgroundColor: 'transparent',
    opacity: 0,

    transition: theme.transitions.create('background-color, opacity', {
      duration: theme.transitions.duration.shortest,
    }),
  },
}));
