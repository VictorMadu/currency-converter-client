import { ChevronDownIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { VoidFunc } from "../../types";

interface IToggleBtnProps {
  isOpen: boolean;
  onClick?: VoidFunc;
  iconColor?: string;
}

const ToggleBtn = (props: IToggleBtnProps) => {
  return (
    <button
      className={classNames(
        "transition",
        props.iconColor ?? "text-inherit",
        props.isOpen ? "rotate-180" : ""
      )}
      onClick={props.onClick }
    >
      <ChevronDownIcon className="w-4 h-4" />
    </button>
  );
};

export default ToggleBtn;
