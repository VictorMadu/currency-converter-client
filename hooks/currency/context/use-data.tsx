import { Dispatch, useReducer } from "react";
import { ICurrencyPricesRes } from "../../../api/_dtypes";

export type IAction = {
  type: "update";
  payload: ICurrencyPricesRes["data"];
};

const internalReducer = (
  state: ICurrencyPricesRes["data"],
  action: IAction
) => {
  switch (action.type) {
    case "update":
      return {
        ...action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const defaultState: ICurrencyPricesRes["data"] = {
  base: '',
  currencies: []
}

export function useCurrencyData(
  initial: ICurrencyPricesRes["data"] = defaultState,
  reducer = internalReducer
) {
  const [state, dispatch] = useReducer(reducer, initial);
  return [state, dispatch] as [ICurrencyPricesRes["data"], Dispatch<IAction>];
}

export const reducer = internalReducer;