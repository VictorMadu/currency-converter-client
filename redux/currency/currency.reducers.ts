import CurrenciesActionTypes from "./currency.types";
import { ICurrencyDispatch, ICurrencyState } from "./_dtypes";

const INITIAL_STATE: ICurrencyState = {
  data: {
    base: "",
    currencies: [],
  },
  error: null,
};

const currenciesReducer = (
  state = INITIAL_STATE,
  action: ICurrencyDispatch
): ICurrencyState => {
  switch (action.type) {
    case CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS:
      return { ...state, data: action.payload };
    case CurrenciesActionTypes.FETCH_CURRENCIES_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default currenciesReducer;
