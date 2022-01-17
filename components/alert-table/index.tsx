import { createContext, useState } from "react";
import { CogIcon, FilterIcon } from "@heroicons/react/outline";
import { map } from "lodash";
import { currencyPairsTable } from "../../dummy";
import AlertFilterDropdown from "../alert-filter-dropdown";
import TableLayout from "../table-layout";
import AlertRow from "./alert-row";
import SearchInput from "../search-input";
import { CurrenciesAlert, useCurrenciesAlert } from "../../hooks/alert/context";

const AlertTable = () => {
  const [state, dispatch] = useCurrenciesAlert()
  return (
    <CurrenciesAlert value={[state, dispatch]}>
      <TableLayout>
        <div className="flex justify-between items-end gap-x-[5%]">
          <AlertFilterDropdown
          />
          <SearchInput
            id="search"
            placeholder="Search"
            styleWidth="w-full max-w-[6rem]"
            value={''}
            onInputChange={() => {}}
          />
        </div>

        <TableLayout.Container>
          <TableLayout.Main>
            {map(currencyPairsTable, (item, index) => (
              <AlertRow key={item.id} index={index} />
            ))}
          </TableLayout.Main>
        </TableLayout.Container>
      </TableLayout>
    </CurrenciesAlert>
  );
};

export default AlertTable;
