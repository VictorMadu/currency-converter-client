import { VoidFunc } from "../../types";

export interface IDropdownItemProps {
  children: string | JSX.Element;
  onClick: VoidFunc<[]>
}

const DropdownItem = (props: IDropdownItemProps) => {
  return (
    <button className="px-3 py-2 w-full text-left hover:bg-neutral-200" onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default DropdownItem
