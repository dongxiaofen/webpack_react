import React from "react";
import {Router, Route, IndexRoute} from "react-router";
// import { App, Home, About, Connect, } from './container'
import App from './container/App/App';
import Home from './container/Home/Home';
import About from './container/About/About';
import Connect from './container/Connect/Connect';
export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/connect" component={Connect} />
    </Route>
  );
}
