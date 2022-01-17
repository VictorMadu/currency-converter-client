import {createContext, Dispatch, useContext} from "react";
import { ICurrencyPricesRes } from "../../../api/_dtypes";
import { VoidFunc } from "../../../types";
import { defaultState, IAction } from "./use-data";

interface ICurrencyProvider {
  children: JSX.Element;
  value: [
    state: ICurrencyPricesRes['data'],
    dispatch: Dispatch<IAction> | VoidFunc
  ]
}

const CurrencyContext = createContext<ICurrencyProvider["value"]>([defaultState , () => { throw new Error("useCurrencyContext must be used within a CurrencyProvider")}]);

export function CurrencyProvider(props: ICurrencyProvider) {
  return (
    <CurrencyContext.Provider value={props.value}>{props.children}</CurrencyContext.Provider>
  )
}

export function useCurrencyContext() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrencyContext must be used within a CurrencyProvider");
  }
  return context;
}

