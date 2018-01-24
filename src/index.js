import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

var store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
