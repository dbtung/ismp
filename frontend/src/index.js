import 'semantic-ui-css/semantic.min.css';

import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './pages/Home';
import { theme } from './util/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Route path="/">
          <Home />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
