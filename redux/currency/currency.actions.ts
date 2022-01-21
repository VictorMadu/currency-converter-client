import CurrenciesActionTypes from "./currency.types";

export const fetchCurrenciesStart = (baseCurrency?: string) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_START,
  payload: baseCurrency,
});

export const fetchCurrenciesSuccess = (payload: {
  base: string;
  currencies: {
    short: string;
    name: string;
    prev_rate: number;
    curr_rate: number;
  }[];
}) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
  payload,
});

export const fetchCurrenciesFailure = (errorMsg: string) => ({
  type: CurrenciesActionTypes.FETCH_CURRENCIES_FAILURE,
  payload: errorMsg,
});
