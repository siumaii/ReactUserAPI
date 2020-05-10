import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Profile from "./Profile/Profile";
import Tba1 from "./TBA1/TBA1";
import Tba2 from "./TBA2/TBA2";

function View() {
  return (
    <Switch>
      <Route component={Tba1} path="/TBA1" />
      <Route component={Tba2} path="/TBA2" />
      <Route component={Profile} path="/profile" />
      <Route component={About} path="/about" />
      <Route component={Home} path="/" />
    </Switch>
  );
}

export default View;
