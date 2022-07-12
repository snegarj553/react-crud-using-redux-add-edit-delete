
import { createRoot } from 'react-dom/client';

import {createStore,applyMiddleware} from store;
import {createSagaMiddleware} from "redux-saga";
  

export default function store(){
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const sagamiddleware= createSagaMiddleware()
const store =createStore(reducer, applyMiddleware(sagamiddleware));
sagamiddleware.run(saga);


}