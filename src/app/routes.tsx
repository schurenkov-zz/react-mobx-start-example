import React from 'react';
import { Route } from 'react-router-dom';

import { MainPage, DetailPage } from '../page';

const routes = [
  <Route key={1} exact={true} path="/" component={MainPage} />,
  <Route key={2} exact={true} path="/page/:name" component={DetailPage} />,
];

export default routes;
