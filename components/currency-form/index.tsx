import { OrWithArr } from "../../types";
import Dropdown, { ICurrencyProps } from "./_dropdown";
import Input, { IInput } from "./_input";

interface ICurrencyFormProps {
  children: OrWithArr<JSX.Element>
}

interface ICurrencyForm {
  (props: ICurrencyFormProps): JSX.Element;
  Dropdown: (props: ICurrencyProps) => JSX.Element;
  Input: (props: IInput) => JSX.Element;
}


const CurrencyForm: ICurrencyForm = (props)  =>   {
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


export default CurrencyForm
