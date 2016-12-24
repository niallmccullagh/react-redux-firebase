/*eslint-disable no-unused-vars*/
import React from 'react';
import { Route, IndexRoute } from 'react-router';
/*eslint-enable no-unused-vars*/
import App from './components/App';
import AboutPage from './components/about/aboutPage';
import requireAuth from './containers/requireAuth';
import Signup from './containers/signup';
import Login from './containers/login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AboutPage} />
    <Route path="about" component={requireAuth(AboutPage)} />
    <Route path="signup" component={Signup} />
    <Route path="login" component={Login} />
  </Route>
);
