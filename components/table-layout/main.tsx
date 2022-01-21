import { OrWithArr } from "../../types";

interface IMainProps {
  children: OrWithArr<JSX.Element>;
}

export interface IMain {
  (props: IMainProps): JSX.Element;
}

const Main: IMain = (props) => {
  return (
    <div className="overflow-y-auto h-full shrink pb-48">
      {props.children}
    </div>
  );
};

export default Main;
