import { createSelector } from "reselect";
import { RootState } from "../_dtypes";
import { findIndex } from "lodash";

const selectCurrencies = (state: RootState) => state.currencies;

export const selectCurrenciesData = createSelector(
  [selectCurrencies],
  (currencies) => currencies.data
);

export const selectCurrencyBase = createSelector(
  [selectCurrenciesData],
  (currenciesData) => currenciesData.base
);

export const selectCurrencyPairs = createSelector(
  [selectCurrenciesData],
  (currenciesData) => currenciesData.currencies
);

export const selectBaseCurrencyIndex = createSelector(
  [selectCurrencyBase, selectCurrencyPairs],
  (baseShort, currenciesPairs) =>
    findIndex(currenciesPairs, (currency) => currency.short === baseShort)
);
