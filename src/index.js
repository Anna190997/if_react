import React from 'react';
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import App from './components/App/app';
import './styles/style.css';
import {createStore} from "redux";
window.React = React;

const store = createStore(reducer);
const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
);
