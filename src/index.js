/*eslint-disable no-unused-vars*/
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
/*eslint-enable no-unused-vars*/
import 'babel-polyfill';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';


import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
