import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';

function Menu(){

    return(
    <BrowserRouter>
          <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
          </div>
          <Switch>
            <Route component={About} path="/about" />
            <Route component={Home} path="/" />
          </Switch>
        </BrowserRouter>
    );
}

export default Menu;