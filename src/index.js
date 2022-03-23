import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './router';
import { GlobalStyle } from './styledGlobal.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
        <Routes />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);