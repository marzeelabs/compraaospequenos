import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    marginTop: 100,

    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100vw',
      height: 395,
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: -1,
      background: `linear-gradient(123.69deg, ${theme.palette.primary.main} 7.73%, ${theme.palette.secondary.main} 92.27%)`,
    },
  },

  listTitle: {
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 46,
    lineHeight: '63px',
    letterSpacing: 2,
    color: theme.palette.primary.contrastText,
    marginBottom: 80,
  },

  card: {
    flex: '0 0 100%',
    borderRadius: 0,
    paddingBottom: 100,

    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      paddingBottom: 80,

      '&:nth-child(even)': {
        paddingLeft: 30,
      },

      '&:nth-child(odd)': {
        paddingRight: 30,
      },
    },
  },
}));
