import { OrWithArr } from "../../types";

interface IDateContainerProps {
  children: OrWithArr<JSX.Element>;
}

const DateContainer = (props: IDateContainerProps) => {
  return <div className="flex gap-x-2 items-center">{props.children}</div>;
};

export default DateContainer;
