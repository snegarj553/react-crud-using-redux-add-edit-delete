import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import reduxSaga from "redux-saga";
import createSagaMiddleware from 'redux-saga';
import rootsaga from "./rootsaga";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const initialstate=[];

const sagaMiddleware = reduxSaga()
// mount it on the Store
const store = createStore( 
  reducer,initialstate, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(rootsaga)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
