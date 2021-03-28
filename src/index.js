import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import LandingPage from './views/landing-page/landing-page';
import Menu from './components/menu/menu';
import MenuDashboard from './components/menu/menu-dashboard';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Menu/>
      <Route path="/" component={LandingPage} />
    </Switch>
    <Switch>
      <Route path="/dashboard" component={MenuDashboard} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

