import {
  createMuiTheme,
} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
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
  },
});
