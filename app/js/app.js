import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/style.css';
import { Router, browserHistory } from "react-router";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducer';
import myApp from './redux/reducer/stateApp'
// import { App, Home, About, Connect, } from 'container';

import App from './container/App/App';
// import Home from './container/Home/Home';
// import About from './container/About/About';
// import Connect from './container/Connect/Connect';


import routes from './Route';
const component = (
  <Router routes={routes()} history={browserHistory} />
);

let store = createStore(myApp);
// console.log(store, 'store');

ReactDOM.render(
  <Provider store={store} key="previder">
    {component}
  </Provider>,
  document.body
);
