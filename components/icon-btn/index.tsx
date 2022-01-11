import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"
import classNames from "classnames";
import { VoidFunc } from "../../types";

interface IIconBtnProps {
  onClick: VoidFunc
  Icon: (props: {className: string}) => JSX.Element;
  iconColor?: string;
}

const IconBtn = (props: IIconBtnProps) => {

  return (
    <button className={classNames("inline-block", props.iconColor ?? "text-inherit")} onClick={props.onClick}>
      <props.Icon className="w-4 h-4" />
    </button>
  )
}

export default IconBtn
