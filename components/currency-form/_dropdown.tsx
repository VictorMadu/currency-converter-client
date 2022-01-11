import { ChevronDownIcon } from "@heroicons/react/outline";
import Dropdown from "../dropdown";
import CurrencyFlag from "../currency-flag";
import ToggleBtn from "../toggle-btn";

export interface ICurrencyProps {
  fullCurrencyName: string;
  shortCurrencyName: string;
}

const Currency = (props: ICurrencyProps) => {
  const showDropdown = false;
  return (
    <div className="bg-neutral-100 relative flex gap-x-3 items-center px-3 py-2 w-full border border-neutral-400/30 rounded-md">
      <CurrencyFlag src={""} />
      <div className="flex gap-x-1 grow">
        <p>{props.fullCurrencyName}</p>
        <p>{"(" + props.shortCurrencyName + ")"}</p>
      </div>
      <ToggleBtn
        iconColor="text-neutral-900/30"
        isOpen={false}
        onClick={() => {}}
      />

      {/* Dropdown for selecting currency. onInputChange display dropitem whose content text is a substring of the input */}
      {/* Obtain content text for dropdown from server */}
      {/* Dropdown can be toggled by clicking parent */}
      {/* {showDropdown && ( */}
      <Dropdown
        Input={
          <div className="w-full p-2">
            <input className="w-full px-2 py-1 rounded-lg overflow-hidden shadow block focus:outline-none" />
          </div>
        }
        isOpen={showDropdown}
        Items={
          <>
            <Dropdown.Item content="Click" onClick={() => {}} />
            <Dropdown.Item content="Click" onClick={() => {}} />
            <Dropdown.Item content="Click" onClick={() => {}} />
          </>
        }
      />
      {/* )} */}
    </div>
  );
};

export default Currency;
