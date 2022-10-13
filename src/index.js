import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import userStatus from './reducer/reducer';
import App from './components/App/app';
import './styles/style.css';
import { createStore } from 'redux';
window.React = React;

const store = createStore(
  userStatus,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
