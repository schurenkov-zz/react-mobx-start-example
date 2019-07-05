import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';

export const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <section>
      <Switch>{routes}</Switch>
    </section>
  </Router>
);
export default hot(withRouter(App));
