import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import EditComponent from "./edit";
import {createStore,applyMiddleware} from store;
import {createSagaMiddleware} from "redux-saga";
import 

import App from './App';
import reducer from './reducer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const sagamiddleware= createSagaMiddleware()
const store =createStore(reducer, applyMiddleware(sagamiddleware));
sagamiddleware.run(saga)
root.render(
  <StrictMode>
  
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      
        <Route path="/"  element={<App/>} />
        <Route path="/edit/:userid"  element={<EditComponent/>} />
        </Routes>
      </BrowserRouter>    
    </Provider>

  </StrictMode>
);
