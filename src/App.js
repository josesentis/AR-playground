import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import Scanner from "./pages/scanner";

import './App.css';

const App = () => (
  <Router>
    <ul className="header">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/scanner">Scanner</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/scanner">
        <Scanner />
      </Route>
    </Switch>
  </Router>
);

export default App;
