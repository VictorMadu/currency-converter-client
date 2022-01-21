import React, { useEffect, useState } from "react";
import { map } from "lodash";
import AlertFilterDropdown from "../alert-filter-dropdown";
import TableLayout from "../table-layout";
import AlertRow from "./alert-row";
import SearchInput from "../search-input";
import {
  selectAlertsDataObjKeys,
} from "../../redux/alert/alert.selectors";
import { useAppSelector } from "../../redux";
import { selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
import SetAlertModal from "../set-alert-modal";

const AlertTable = () => {
  const [searchInput, setSearchInput] = useState("");
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const alertsDataObjKeys = useAppSelector(selectAlertsDataObjKeys);

  const searchRegExp = new RegExp(
    searchInput
      .trim()
      .toLowerCase()
      .replace(/[\\[.+*?(){|^$]/g, "\\$&")
  );

  const filterSearchedCurrency = (
    baseCurrency: string,
    quotaCurrency: string
  ) => {
    return (baseCurrency && quotaCurrency &&
      searchRegExp.test(baseCurrency.toLowerCase()) ||
      searchRegExp.test(quotaCurrency.toLowerCase()) ||
      searchRegExp.test(currencyPairsObj[baseCurrency].name.toLowerCase()) ||
      searchRegExp.test(currencyPairsObj[quotaCurrency].name.toLowerCase())
    );
  };


  return (
    <TableLayout>   
      <div className="flex justify-between items-end gap-x-[5%]">
        <AlertFilterDropdown />
        <SearchInput
          id="search"
          placeholder="Search"
          styleWidth="w-full max-w-[6rem]"
          value={searchInput}
          onInputChange={(event) => setSearchInput(event.target.value)}
        />
      </div>

      <TableLayout.Container>
        <TableLayout.Main>
          {map(alertsDataObjKeys, (alertsDataKey) => {
            const [baseCurrency, quotaCurrency] = alertsDataKey.split(" ");
            return filterSearchedCurrency(baseCurrency, quotaCurrency) ? (
              <AlertRow key={alertsDataKey} alertsKey={alertsDataKey} />
            ) : (
              <React.Fragment key={alertsDataKey} />
            );
          })}
        </TableLayout.Main>
      </TableLayout.Container>
    </TableLayout>
  );
};
export default AlertTable;
