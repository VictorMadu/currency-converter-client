import CurrenciesActionTypes from "./currencies.types";
import { ICurrencies } from "./_dtypes";

const INITIAL_STATE: ICurrencies = {
  data: {
    base: "",
    currencies: [],
  },
};

const currenciesReducer = (state = INITIAL_STATE, action: any): ICurrencies => {
  switch (action.type) {
    case CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS:
      return { ...state, data: action.payload };
    case CurrenciesActionTypes.FETCH_CURRENCIES_FAILURE:
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

export default currenciesReducer;
