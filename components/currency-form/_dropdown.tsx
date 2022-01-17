import { OrWithArr } from "../../types"
import _Dropdown from "../dropdown"
import Input, {IInputProps} from "./_input"

export interface IDropdownProp {
  Input: JSX.Element
  children: OrWithArr<JSX.Element>
}

const Dropdown = (props: IDropdownProp) => {
  return (
    <_Dropdown
    Input={props.Input}
  >
    {props.children}
  </_Dropdown>
  )
}

export default _Dropdown
