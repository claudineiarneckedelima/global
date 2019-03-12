import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Home from "./home/Home";

const Routers = props => {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Redirect to="/" />
    </div>
  </Router>
  );
};

export default Routers; 
 