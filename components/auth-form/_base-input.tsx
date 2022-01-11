import classNames from "classnames";
import { VoidFunc } from "../../types";

export interface IBaseInputProps {
  id: string;
  type?: "text" | "password" | "tel" | "email" ;
  padding?: string
  // onChange: VoidFunc
}

const BaseInput = (props: IBaseInputProps) => {
  return (
    <input
      type={props.type ?? "text"}
      name={props.id}
      id={props.id}
      className={classNames("bg-neutral-300 text-neutral-900/70 focus:outline-none rounded shadow-inner w-full", props.padding ?? "px-2 py-1 ")}
    />
  );
};

export default BaseInput;
