import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import HomePage from './Pages/HomePage/HomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1abc9c',
    },
  },
});

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
