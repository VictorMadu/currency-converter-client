import { all, call } from "redux-saga/effects";
import { alertsSaga } from "./alert/alert.saga";
import { currenciesSaga } from "./currency/currency.saga";
import { userSaga } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(currenciesSaga), call(alertsSaga), call(userSaga)]);
}
