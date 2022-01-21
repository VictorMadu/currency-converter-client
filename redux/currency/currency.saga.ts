import { takeLatest, call, put, all } from "redux-saga/effects";
import { getCurrencyPrices } from "../../api";
import { PromiseReturnType } from "../../types";
import {
  fetchCurrenciesFailure,
  fetchCurrenciesStart,
  fetchCurrenciesSuccess,
} from "./currency.actions";
import CurrenciesActionTypes from "./currency.types";

function* changeCurrenciesAsyncSaga({
  payload: baseCurrency,
}: ReturnType<typeof fetchCurrenciesStart>) {
  const data = (yield getCurrencyPrices(baseCurrency)) as PromiseReturnType<
    typeof getCurrencyPrices
  >;

  if (!data) yield put(fetchCurrenciesFailure("Error Fetching Currencies"));
  else yield put(fetchCurrenciesSuccess(data));
}

function* fetchCurrenciesStartSaga() {
  yield takeLatest<any>(
    CurrenciesActionTypes.FETCH_CURRENCIES_START as ReturnType<
      typeof fetchCurrenciesStart
    >["type"],
    changeCurrenciesAsyncSaga
  );
}

export function* currenciesSaga() {
  yield all([call(fetchCurrenciesStartSaga)]);
}
