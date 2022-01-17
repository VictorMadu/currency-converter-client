import classNames from "classnames";
import { ChangeEvent } from "react";

export type ISearchInput = {
  id: string;
  placeholder?: string;
  styleWidth?: string;
  value: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
};

const SearchInput = (props: ISearchInput) => {
  return (
   <label htmlFor={props.id} className="flex flex-col items-end ml-auto gap-y-1.5">
     {!!props.placeholder && <span className="uppercase font-[Roboto] text-xs text-neutral-900/30">{props.placeholder + ":"}</span>}
      <input
      value={props.value}
      id={props.id}
      type="text"
      onChange={props.onInputChange}
      className={classNames("px-1 py-0.5 focus:outline-none rounded border border-transparent shadow-inner bg-neutral-300 ring-1 ring-transparent focus:ring-neutral-500/30 transition duration-300", props.styleWidth)}
      // placeholder={props.placeholder}
    />
   </label>
  );
};

export default SearchInput;
