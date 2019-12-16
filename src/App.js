import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Scanner from "./pages/scanner";

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/scanner">Home</Link>
      </li>
      <li>
        <Link to="/">Scanner</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/">
        <Scanner />
      </Route>
      <Route path="/scanner">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
