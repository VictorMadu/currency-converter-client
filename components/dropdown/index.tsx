import classNames from "classnames";
import { OrWithArr } from "../../types";
import DropdownItem, { IDropdownItemProps } from "./dropdown-item";

interface IDropdownProps {
  Input?: JSX.Element;
  children: OrWithArr<JSX.Element>;
}

interface IDropdown {
  (props: IDropdownProps): JSX.Element;
  Item: (props: IDropdownItemProps) => JSX.Element;
}

const Dropdown: IDropdown = (props) => {
  return (
    <div
      // TODO: Transition out when prop.isOpen becomes false after true does not work
      className={classNames(
        "z-10 bg-neutral-100 absolute top-full left-1/2 -translate-x-1/2 w-full shadow-xl rounded-b-lg transition-all duration-300"
      )}
    >
      {props.Input}
      <div className="max-h-48 overflow-auto">{props.children}</div>
    </div>
  );
};

Dropdown.Item = DropdownItem;

export default Dropdown;
