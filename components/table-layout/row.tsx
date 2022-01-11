import { OrWithArr } from "../../types";

interface IRowProps {
  children: OrWithArr<JSX.Element>;
}

export interface IRow {
  (props: IRowProps): JSX.Element;
}

const Row: IRow = (props) => {
  return (
    <div className="flex items-center border-b border-neutral-500/30 px-[3%] py-2 gap-x-[3%]">
      {props.children}
    </div>
  );
};

export default Row;
