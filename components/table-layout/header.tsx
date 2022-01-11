import { OrWithArr } from "../../types"

interface IHeaderProps {
  children: OrWithArr<JSX.Element>
}

export interface IHeader {
  (props: IHeaderProps): JSX.Element
}


const Header: IHeader = (props) => {
  return (
    <div className="flex bg-neutral-300 uppercase text-sm font-bold">
      {props.children}
    </div>
  )
}

export default Header
