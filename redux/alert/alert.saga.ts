import { takeEvery, takeLatest, call, put, all } from "redux-saga/effects";
import { createCurrencyAlert, getCurrenciesAlerts } from "../../api";
import { PromiseReturnType } from "../../types";
import {
  fetchAlertsFailure,
  fetchAlertsStart,
  fetchAlertsSuccess,
  setAlertStart,
} from "./alert.actions";
import AlertActionTypes from "./alert.types";

function* fetchAlertsAsyncSaga({
  payload,
}: ReturnType<typeof fetchAlertsStart>) {
  const data = (yield getCurrenciesAlerts(
    payload.token,
    payload.bases,
    payload.quotas,
    payload.type
  )) as PromiseReturnType<typeof getCurrenciesAlerts>;

  if (!data) yield put(fetchAlertsFailure("Error fetching alerts"));
  else yield put(fetchAlertsSuccess(data));
}

function* setAlertAsyncSaga({ payload, cb }: ReturnType<typeof setAlertStart>) {
  const success = (yield createCurrencyAlert(
    payload.token,
    payload.base,
    payload.quota,
    payload.targetRate
  )) as PromiseReturnType<typeof createCurrencyAlert>;

  if (cb) yield cb(success);
}

function* fetchAlertStartSaga() {
  yield takeLatest<any>(
    AlertActionTypes.FETCH_ALERTS_START as ReturnType<
      typeof fetchAlertsStart
    >["type"],
    fetchAlertsAsyncSaga
  );
}

function* setAlertStartSaga() {
  yield takeEvery<any>(
    AlertActionTypes.SET_ALERT_START as ReturnType<
      typeof setAlertStart
    >["type"],
    setAlertAsyncSaga
  );
}

export function* alertsSaga() {
  yield all([call(fetchAlertStartSaga), call(setAlertStartSaga)]);
}
