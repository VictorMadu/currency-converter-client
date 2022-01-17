import { FilterIcon } from "@heroicons/react/outline";
import {  Dispatch, useState } from "react";
import { getCurrenciesAlerts } from "../../api";
import { IAction, useCurrenciesAlert } from "../../hooks/alert/context";
import Dropdown from "../dropdown";
import ToggleBtn from "../toggle-btn";

interface IAlertFilterDropdownProps {
}

const handleClick = (dispatch: Dispatch<IAction>, alertType: "pending" | "triggered" | undefined) => {
  Promise.resolve(getCurrenciesAlerts(undefined, undefined, alertType)).then(data => {
    if (!data) return alert('Error fetching data');  // handle it like dispatch alert or something that
    dispatch({type: 'update', payload: data})
  })
}

const AlertFilterDropdown = (props: IAlertFilterDropdownProps) => {
 const [showDropdown, setShowDropdown] = useState(false);
 const [state, dispatch] = useCurrenciesAlert();

  return (
    <div className="relative w-full max-w-[8rem] font-sans">
      <div className="flex gap-x-2 items-center px-2 py-1.5 rounded border border-neutral-500/30 text-neutral-900/30">
        <FilterIcon className="w-5 h-5" />
        <p className="text-neutral-900/60 grow">All</p>
        <ToggleBtn
          iconColor="text-neutral-900/30"
          isOpen={showDropdown}
          onClick={() => setShowDropdown(showDropdown => !showDropdown)}
        />
      </div>

     {showDropdown ?  <Dropdown>
        <Dropdown.Item onClick={() => handleClick(dispatch, undefined)}>All</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick(dispatch, 'pending')}>Pending</Dropdown.Item>
        <Dropdown.Item onClick={() => handleClick(dispatch, 'triggered')}>Triggered</Dropdown.Item>
      </Dropdown> : <></>}
    </div>
  );
};

export default AlertFilterDropdown;