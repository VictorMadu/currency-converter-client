import { all, call } from "redux-saga/effects";
import { currenciesSaga } from "./currencies/currencies.saga";

export default function* rootSaga() {
  yield all([call(currenciesSaga)]);
}
