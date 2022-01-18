import CurrencyForm from "../currency-form";
import { findIndex, map, filter, isEqual } from "lodash";
import DropItem from "./drop-item";
import { getCurrencyPrices } from "../../api";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBaseCurrencyIndex,
  selectCurrencyPairs,
} from "../../redux/currencies/currencies.selectors";
import { fetchCurrenciesStart } from "../../redux/currencies/currencies.actions";
// import { defaultState, useCurrencyContext } from "../../hooks/currency/context";

const ControlSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const currencyPairs = useSelector(selectCurrencyPairs);
  const baseCurrencyIndex = useSelector(selectBaseCurrencyIndex);
  const dispatch  = useDispatch()

  const baseShortName =
    baseCurrencyIndex >= 0 ? currencyPairs[baseCurrencyIndex].short : "";

  const baseLongName =
    baseCurrencyIndex >= 0 ? currencyPairs[baseCurrencyIndex].name : "";

  // const [currencyData, dispatch] = useCurrencyContext();
  // const isDefaultCurrencyData = isEqual(currencyData,defaultState);

  // const baseCurrencyShortName = currencyData.base;
  // const baseCurrencyIndex = findIndex(
  //   currencyData.currencies,
  //   (currency) => currency.short === baseCurrencyShortName
  // );
  // const baseCurrencyLongName = isDefaultCurrencyData ? '' : currencyData.currencies[baseCurrencyIndex].name;

  // const handleClick = (currency: string) => {
  //   getCurrencyPrices(currency).then(
  //     (data) => {
  //       if (data === undefined) return {} // handle it
  //       dispatch && dispatch({ type: "update", payload: data })
  //     }
  //   );
  // };

  const handleClick = (baseCurrency: string) => {
    dispatch(fetchCurrenciesStart(baseCurrency));
    console.log('Dropdown was clicked', baseCurrency);
  }

  const searchRegExp = new RegExp(
    searchInput
      .trim()
      .toLowerCase()
      .replace(/[\\[.+*?(){|^$]/g, "\\$&")
  );

  const filterCurrency = (currency: { short: string; name: string }) =>
    searchRegExp.test(
      currency.short.toLowerCase() + currency.name.toLowerCase()
    );

  return (
    <div className="flex flex-col">
      <CurrencyForm>
        <CurrencyForm.DropdownContainer
          fullCurrencyName={baseLongName}
          shortCurrencyName={baseShortName}
        >
          <CurrencyForm.Dropdown
            Input={
              <CurrencyForm.Input
                value={searchInput}
                onInputChange={(event) => setSearchInput(event.target.value)}
              />
            }
          >
            {map(currencyPairs, (currency) =>
              filterCurrency(currency) ? (
                <DropItem
                  key={currency.short}
                  short={currency.short}
                  full={currency.name}
                  handleClick={handleClick}
                />
              ) : (
                <></>
              )
            )}
          </CurrencyForm.Dropdown>
        </CurrencyForm.DropdownContainer>
      </CurrencyForm>
    </div>
  );
};

export default ControlSection;
