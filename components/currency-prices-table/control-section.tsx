import CurrencyForm from "../currency-form";
import { findIndex, map, filter, isEqual } from "lodash";
import DropItem from "./drop-item";
import { getCurrencyPrices } from "../../api";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrenciesStart } from "../../redux/currency/currency.actions";
import { useAppDispatch, useAppSelector } from "../../redux";
import { selectCurrencyBase, selectCurrencyLists, selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
// import { defaultState, useCurrencyContext } from "../../hooks/currency/context";

const ControlSection = () => {
  const [searchInput, setSearchInput] = useState("");
  const baseCurrency = useAppSelector(selectCurrencyBase);
  const currencyLists = useAppSelector(selectCurrencyLists);
  const currencyPairs = useAppSelector(selectCurrencyPairsObj);
  const dispatch  = useAppDispatch()

  const handleClick = (baseCurrency: string) => {
    dispatch(fetchCurrenciesStart(baseCurrency));
  }

  const searchRegExp = new RegExp(
    searchInput
      .trim()
      .toLowerCase()
      .replace(/[\\[.+*?(){|^$]/g, "\\$&")
  );

  const filterSearchedCurrency = (currency: string) => {
    return (
      currency !== baseCurrency &&
      searchRegExp.test(
        currency.toLowerCase() + currencyPairs[currency].name.toLowerCase()
      )
    );
  };

  return (
    <div className="flex flex-col">
      <CurrencyForm>
        <CurrencyForm.DropdownContainer
          fullCurrencyName={currencyPairs[baseCurrency].name}
          shortCurrencyName={baseCurrency}
        >
          <CurrencyForm.Dropdown
            Input={
              <CurrencyForm.Input
                value={searchInput}
                onInputChange={(event) => setSearchInput(event.target.value)}
              />
            }
          >
            {map(currencyLists, (currency: string) =>
              filterSearchedCurrency(currency) ? (
                <DropItem
                  key={currency}
                  short={currency}
                  full={currencyPairs[currency].name}
                  handleClick={handleClick}
                />
              ) : (
                <React.Fragment key={currency} />
              )
            )}
          </CurrencyForm.Dropdown>
        </CurrencyForm.DropdownContainer>
      </CurrencyForm>
    </div>
  );
};

export default ControlSection;
