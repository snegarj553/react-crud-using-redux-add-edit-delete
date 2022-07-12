

export default function* watchGetUser(){

  yield takeEvery( "FETCH_USER",workergetuser)
}

function* workergetuser(){
  const url="https://jsonplaceholder.typicode.com/posts/1";
  const result = yield call(axios.get, url);
yield put({type:ADD_DETAIL, payload:result.data})
}