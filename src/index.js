import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App/app';
import './styles/style.css';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer/index';
import { PersistGate } from 'redux-persist/integration/react';
import { watchFetchHotel } from './sagas/sagaHotel';
import { composeWithDevTools } from 'redux-devtools-extension';

window.React = React;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedStore = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedStore,
  composeWithDevTools((applyMiddleware(sagaMiddleware)))
);

sagaMiddleware.run(watchFetchHotel);

const persistor = persistStore(store);

const element = document.getElementById('root');
const root = createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
