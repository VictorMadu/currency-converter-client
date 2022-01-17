import { NextPage } from "next";
import AlertTable from "../../components/alert-table";
import Header from "../../components/header";
import Main from "../../components/main";

const Alert: NextPage = () => {
  return (
    <Main>
      <Header />
      <AlertTable />
    </Main>
  );
};

export default Alert;
