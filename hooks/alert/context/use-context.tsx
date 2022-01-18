import {createContext, Dispatch, useContext} from "react";
import { ICurrenciesAlertsRes } from "../../../api/_dtypes";
import { VoidFunc } from "../../../types";
import { initialState, IAction } from "./use-data";

interface ICurrenciesAlertProvider {
  children: JSX.Element;
  value: [
    state: ICurrenciesAlertsRes['data'],
    dispatch: Dispatch<IAction> | VoidFunc
  ]
}

const CurrenciesAlertContext = createContext<ICurrenciesAlertProvider["value"]>([initialState , () => { throw new Error("useCurrenciesAlertContext must be used within a CurrenciesAlertProvider")}]);

export function CurrenciesAlert(props: ICurrenciesAlertProvider) {
  return (
    <CurrenciesAlertContext.Provider value={props.value}>{props.children}</CurrenciesAlertContext.Provider>
  )
}

export function useCurrenciesAlertContext() {
  const context = useContext(CurrenciesAlertContext);
  if (context === undefined) {
    throw new Error("useCurrenciesAlertContext must be used within a CurrencyProvider");
  }
  return context;
}

