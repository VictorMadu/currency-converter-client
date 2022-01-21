import {
  fetchCurrenciesStart,
  fetchCurrenciesSuccess,
  fetchCurrenciesFailure,
} from "./currency.actions";

export interface ICurrencyData {
  base: string;
  currencies: {
    short: string;
    name: string;
    prev_rate: number;
    curr_rate: number;
  }[];
}

export interface ICurrencyState {
  data: ICurrencyData;
  error: string | null;
}

export type ICurrencyDispatch = ReturnType<
  | typeof fetchCurrenciesStart
  | typeof fetchCurrenciesSuccess
  | typeof fetchCurrenciesFailure
>;
