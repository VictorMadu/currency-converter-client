import { Dispatch, useReducer } from "react";
import { ICurrenciesAlertsRes } from "../../../api/_dtypes";

export type IAction = {
  type: "update";
  payload: ICurrenciesAlertsRes["data"];
} | {type: "set_type"; payload: "pending" | "triggered" | undefined};

const internalReducer = (
  state: ICurrenciesAlertsRes["data"],
  action: IAction
) => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const defaultState: ICurrenciesAlertsRes["data"] = [];

export function useCurrenciesAlert(
  initial: ICurrenciesAlertsRes["data"] = defaultState,
  reducer = internalReducer
) {
  const [state, dispatch] = useReducer(reducer, initial);

  return [state, dispatch] as [ICurrenciesAlertsRes["data"], Dispatch<IAction>];
}

export const reducer = internalReducer;