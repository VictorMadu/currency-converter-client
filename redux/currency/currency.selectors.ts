import { createSelector } from "reselect";
import { RootState } from "../_dtypes";
import { findIndex, reduce, keysIn } from "lodash";

const selectCurrencies = (state: RootState) => state.currencies;

export const selectCurrenciesData = createSelector(
  [selectCurrencies],
  (currencies) => currencies.data
);

export const selectCurrencyBase = createSelector(
  [selectCurrenciesData],
  (currenciesData) => currenciesData.base
);

const selectCurrencyPairsArr = createSelector(
  [selectCurrenciesData],
  (currenciesData) => currenciesData.currencies
);

export const selectCurrencyPairsObj = createSelector(
  [selectCurrencyPairsArr],
  (currencyPairs) =>
    reduce(
      currencyPairs,
      (acc, currencyPair) => {
        acc[currencyPair.short] = {
          name: currencyPair.name,
          prev_rate: currencyPair.prev_rate,
          curr_rate: currencyPair.curr_rate,
        };
        return acc;
      },
      {} as Record<
        string,
        { name: string; prev_rate: number; curr_rate: number }
      >
    )
);

export const selectCurrencyLists = createSelector(
  [selectCurrencyPairsObj],
  (currencyPairsObj) => keysIn(currencyPairsObj)
);
