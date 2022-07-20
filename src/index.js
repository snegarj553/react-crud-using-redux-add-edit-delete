import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditComponent from './edit';
import {
  createStore,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './reducer';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/edit/:userid" element={<EditComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
