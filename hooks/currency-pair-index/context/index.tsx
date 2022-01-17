import { createContext, useContext } from "react";

interface IContextState {
  baseIndex: number | null;
  quotaIndex: number | null;
}

interface ICurrencyPairProvider {
  children: JSX.Element;
  value: IContextState;
}

const defaultState: IContextState = {
  baseIndex: null,
  quotaIndex: null,
};

const CurrencyContext = createContext<IContextState>(defaultState);

export function CurrencyPairProvider(props: ICurrencyPairProvider) {
  return (
    <CurrencyContext.Provider value={props.value}>
      {props.children}
    </CurrencyContext.Provider>
  );
}

export function useCurrencyPairContext() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error(
      "useCurrencyPairContext must be used within a CurrencyPairProvider"
    );
  }
  return context;
}
