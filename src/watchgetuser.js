import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Axios from "axios";
import {FETCH_USER , ADD_DETAIL} from "./reducer";
export const watchGetUser= function*(){

  yield takeEvery( "FETCH_USER",workergetuser)
}

function* workergetuser(){
  const url="https://jsonplaceholder.typicode.com/posts/1";
  const result = yield call(Axios.get, url);
  console.log("data",result.data);
yield put({type:ADD_DETAIL, payload: result.data})
}