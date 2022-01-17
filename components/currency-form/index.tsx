import { OrWithArr } from "../../types";
import Dropdown, { IDropdownProp } from "./_dropdown";
import DropdownContainer, { IDropdownContainerProps } from "./_dropdown-container";
import Input, { IInputProps } from "./_input";

interface ICurrencyFormProps {
  children: OrWithArr<JSX.Element>
}

interface ICurrencyForm {
  (props: ICurrencyFormProps): JSX.Element;
  Input: (props: IInputProps) => JSX.Element,
  Dropdown: (props: IDropdownProp) => JSX.Element;
  DropdownContainer: (props: IDropdownContainerProps) => JSX.Element
}


const CurrencyForm:ICurrencyForm = (props)  =>   {
  return (
    <div className="w-full flex flex-col items-center gap-y-4">
      {props.children}
      {/* Dropdown Detail  */}
      {/* Price */}
    </div>
  );
}



CurrencyForm.Dropdown = Dropdown;
CurrencyForm.Input = Input;
CurrencyForm.Dropdown = Dropdown;
CurrencyForm.DropdownContainer = DropdownContainer;


export default CurrencyForm
