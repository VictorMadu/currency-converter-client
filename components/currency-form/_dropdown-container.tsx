import Dropdown from "../dropdown";
import CurrencyFlag from "../currency-flag";
import ToggleBtn from "../toggle-btn";
import { useState } from "react";
import { OrWithArr } from "../../types";

export interface IDropdownContainerProps {
  fullCurrencyName: string;
  shortCurrencyName: string;
  children: JSX.Element;
}

const DropdownContainer = (props: IDropdownContainerProps) => {
  const [showDropdown, setShowDropDown] = useState(false);
  const handleClick = () => {
    setShowDropDown((showDropdown) => !showDropdown)
  }

  // window.onclick && window.onclick(() => {})
  // TODO: Use page or all app Wrapper and use its context or reducer dispatch to know when there is a click event
  return (
    <div className="bg-neutral-100 relative flex gap-x-3 items-center px-3 py-2 w-full border border-neutral-400/30 rounded-md" onClick={handleClick}>
      <CurrencyFlag src={""} />
      <div className="flex gap-x-1 grow">
        <p>{props.fullCurrencyName}</p>
        <p>{"(" + props.shortCurrencyName + ")"}</p>
      </div>
      <ToggleBtn
        iconColor="text-neutral-900/30"
        isOpen={showDropdown}

      />

      {/* Dropdown for selecting currency. onInputChange display dropitem whose content text is a substring of the input */}
      {/* Obtain content text for dropdown from server */}
      {/* Dropdown can be toggled by clicking parent */}
      {/* {showDropdown && ( */}
      {showDropdown ? props.children : <></>}
    </div>
  );
};

export default DropdownContainer;
