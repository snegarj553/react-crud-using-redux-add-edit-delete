import watchGetUser from "./watchgetuser";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork( watchGetUser)]);
}


