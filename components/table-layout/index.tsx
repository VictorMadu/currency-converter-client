import { OrWithArr } from "../../types";
import Container, { IContainer } from "./container";
import Header, { IHeader } from "./header";
import Main, { IMain } from "./main";
import Row, { IRow } from "./row";

interface ITableLayoutProps {
  children: OrWithArr<JSX.Element>;
}

interface ITableLayout {
  (props: ITableLayoutProps): JSX.Element;
  Container: IContainer;
  Header: IHeader;
  Main: IMain
  Row: IRow
}

const TableLayout: ITableLayout = (props) => {
  return (
    <div className="mt-3 flex flex-col h-full gap-y-2 pb-1 overflow-hidden">
      {props.children}
    </div>
  );
};


TableLayout.Header = Header;
TableLayout.Container = Container;
TableLayout.Main = Main;
TableLayout.Row = Row;

export default TableLayout;
