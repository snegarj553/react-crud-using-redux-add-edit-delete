import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import EditComponent from "./edit";
import App from './App';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootsaga from "./rootsaga";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootsaga)
root.render(
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
      
        <Route path="/"  element={<App/>} />
        <Route path="/edit/:userid"  element={<EditComponent/>} />
        </Routes>
      </BrowserRouter>    
    </Provider>

);
