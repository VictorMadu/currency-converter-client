import { OrWithArr } from "../../types"

interface IContainerProps {
  children: OrWithArr<JSX.Element>
}

export interface IContainer {
  (props: IContainerProps): JSX.Element
}


const Container: IContainer = (props) => {
  return (
    <div className="flex flex-col h-full rounded-md border border-neutral-500/30 font-[Roboto]">
      {props.children}
    </div>
  )
}

export default Container
