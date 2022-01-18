import { takeLatest, call, put, all } from "redux-saga/effects";
import { getCurrencyPrices } from "../../api";
import { ICurrencyPricesRes } from "../../api/_dtypes";
import {
  fetchCurrenciesFailure,
  fetchCurrenciesSuccess,
} from "./currencies.actions";
import CurrenciesActionTypes from "./currencies.types";

function* changeCurrenciesAsync({
  payload: baseCurrency,
}: {
  payload: string;
}) {
  const data = (yield getCurrencyPrices(baseCurrency)) as
    | ICurrencyPricesRes["data"]
    | void;
  if (!data) {
    yield put(fetchCurrenciesFailure("Error Fetching Currencies"));
  } else {
    yield put(fetchCurrenciesSuccess(data));
  }
}

export function* fetchCurrenciesStart() {
  yield takeLatest<any>(
    CurrenciesActionTypes.FETCH_CURRENCIES_START,
    changeCurrenciesAsync
  );
}

export function* currenciesSaga() {
  yield all([call(fetchCurrenciesStart)]);
}
