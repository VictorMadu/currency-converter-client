import classNames from "classnames";

export type IInput = {
  id: string;
  placeholder?: string;
  styleWidth?: string;
};

const Input = (props: IInput) => {
  return (
   <label htmlFor={props.id} className="flex flex-col items-end ml-auto gap-y-1.5">
     {!!props.placeholder && <span className="uppercase font-[Roboto] text-xs text-neutral-900/30">{props.placeholder + ":"}</span>}
      <input
      id={props.id}
      type="text"
      className={classNames("px-1 py-0.5 focus:outline-none rounded border border-transparent shadow-inner bg-neutral-300 ring-1 ring-transparent focus:ring-neutral-500/30 transition duration-300", props.styleWidth)}
      // placeholder={props.placeholder}
    />
   </label>
  );
};

export default Input;
