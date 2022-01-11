import { VoidFunc } from "../../types";

interface IButtonProps {
  Icon: (props: {className: string}) => JSX.Element
  onClick: VoidFunc;
}

const ButtonIcon = (props: IButtonProps) => {
  return (
    <button className="text-neutral-900/50" onClick={props.onClick}>
      <props.Icon className='w-5 h-5' />
    </button>
  )
}

export default ButtonIcon
