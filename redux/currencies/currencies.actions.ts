import CurrenciesActionTypes from "./currencies.types";
import { ICurrencies } from "./_dtypes";

export const fetchCurrenciesStart = (baseCurrency?: string) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_START,
  payload: baseCurrency,
});

export const fetchCurrenciesSuccess = (payload: ICurrencies["data"]) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
  payload,
});

export const fetchCurrenciesFailure = (errorMsg: string) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILURE,
  payload: errorMsg,
});
