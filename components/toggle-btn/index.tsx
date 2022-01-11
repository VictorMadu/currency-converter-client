import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import classNames from "classnames";
import { VoidFunc } from "../../types";

interface IToggleBtnProps {
  isOpen: boolean
  onClick: VoidFunc
  iconColor?: string;
}

const ToggleBtn = (props: IToggleBtnProps) => {
  const Icon = props.isOpen ? ChevronUpIcon : ChevronDownIcon;

  return (
    <button className={classNames(props.iconColor ?? "text-inherit")} onClick={props.onClick}>
      <Icon className="w-4 h-4" />
    </button>
  )
}

export default ToggleBtn
