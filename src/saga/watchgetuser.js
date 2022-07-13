import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Axios from 'axios';
import { FETCH_USER, ADD_DETAIL } from './reducer';

function* watchGetUser() {
  yield takeLatest("FETCH_USER", workergetuser);
}

function* workergetuser() {
 try{
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const result = yield call(Axios.get, url);
  console.log('Axios', result.data);
  yield put({ type: "ADD_DETAIL", payload: result.data });
 }
 catch(error){
   console.log("Error",error);
 }
}

export default watchGetUser;