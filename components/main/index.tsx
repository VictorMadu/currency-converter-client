import classNames from "classnames";
import { OrWithArr } from "../../types";

interface IMainProps {
  styleGapY?: string;
  children: OrWithArr<JSX.Element>;
}

const Main = (props: IMainProps) => {
  return (
    <main
      className={classNames("px-[2%] flex flex-col h-full", props.styleGapY)}
    >
      {props.children}
    </main>
  );
};

export default Main;
