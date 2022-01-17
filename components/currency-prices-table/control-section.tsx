import CurrencyForm from "../currency-form";
import { findIndex, map, filter, isEqual } from "lodash";
import DropItem from "./drop-item";
import { getCurrencyPrices } from "../../api";
import { useState } from "react";
import { defaultState, useCurrencyContext } from "../../hooks/currency/context";

const ControlSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currencyData, dispatch] = useCurrencyContext();

  const isDefaultCurrencyData = isEqual(currencyData,defaultState);

  const baseCurrencyShortName = currencyData.base;
  const baseCurrencyIndex = findIndex(
    currencyData.currencies,
    (currency) => currency.short === baseCurrencyShortName
  );
  const baseCurrencyLongName = isDefaultCurrencyData ? '' : currencyData.currencies[baseCurrencyIndex].name;

  const handleClick = (currency: string) => {
    getCurrencyPrices(currency).then(
      (data) => {
        if (data === undefined) return {} // handle it
        dispatch && dispatch({ type: "update", payload: data })
      }
    );
  };

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
          fullCurrencyName={baseCurrencyLongName}
          shortCurrencyName={baseCurrencyShortName}
        >
          <CurrencyForm.Dropdown
            Input={
              <CurrencyForm.Input
                value={searchInput}
                onInputChange={(event) => setSearchInput(event.target.value)}
              />
            }
          >
            {map(currencyData.currencies, (currency) =>
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
