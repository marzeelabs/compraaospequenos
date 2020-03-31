import {
  createMuiTheme,
} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    background: '#FFFFFF',
    primary: {
      main: '#2F5BEA',
      dark: '#0F3963',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00AFAD',
      contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
    tonalOffset: 0.5,

    text: {
      primary: '#2C2E30',
      secondary: '#54565A',
      hint: '#7E8085',
    },
  },

  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
