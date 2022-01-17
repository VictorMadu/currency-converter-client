import { ChangeEvent, useState } from "react";

interface IInputProps {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IInputProps) => {
  // Take currency name as prop and use it to get its symbol and replace $

  return (
    <label
      htmlFor="currency_amount"
      className="flex justify-center items-center gap-x-1 bg-neutral-300 shadow-inner px-1.5 py-2 rounded-lg"
    >
      <span className="font-bold">$</span>
      <input
        // type="number"
        name="currency_amount"
        id="currency_amount"
        className="outline-none bg-transparent w-20"
        value={props.value}
        onChange={props.onInputChange}
        // onChange={(event) => {
        //   console.log('OnChange', event.target.value)
        //   setValue(event.target.value)
        // }}
        // onInput={(event) => {
        //   console.log('OnInput', event.target.)
        // }}
      />
    </label>
  );
};

export default Input;
