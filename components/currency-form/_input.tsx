import { ChangeEvent } from "react";

export interface IInputProps {
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: IInputProps) => {
  return (
    <div className="w-1/2 ml-auto p-2">
      <input className="w-full px-2 py-1.5 overflow-hidden block focus:outline-none bg-neutral-300 shadow-inner rounded-lg" onChange={props.onInputChange} value={props.value} onClick={(event) => event.stopPropagation()} />
    </div>
  );
};

export default Input;
