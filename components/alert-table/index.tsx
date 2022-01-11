import { CogIcon, FilterIcon } from "@heroicons/react/outline";
import { map } from "lodash";
import { currencyPairsTable } from "../../dummy";
import AlertFilterDropdown from "../alert-filter-dropdown";
import CurrencyForm from "../currency-form";
import Dropdown from "../dropdown";
import TableLayout from "../table-layout";
import ToggleBtn from "../toggle-btn";
import AlertRow from "./alert-row";

const AlertTable = () => {
  return (
    <TableLayout>
      <div className="flex justify-between items-end gap-x-[5%]">
        <AlertFilterDropdown
          onToggleOpen={(isOpen) => {}}
          initialIsOpen={false}
        />
        <CurrencyForm.Input
          id="search"
          placeholder="Search"
          styleWidth="w-full max-w-[6rem]"
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
  );
};

export default AlertTable;
