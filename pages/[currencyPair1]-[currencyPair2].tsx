import type { NextPage } from "next";
import CurrencyConversionLayout from "../components/currency-conversion-layout";
import HeaderTitleWithBack from "../components/header-title-with-back";
import Main from "../components/main";

const CurrencyPairs: NextPage = () => {
  return (
    <Main>
       <HeaderTitleWithBack title={"Nigerian Naira/US Dollars"} />
      <CurrencyConversionLayout />
    </Main>
  );
};

export default CurrencyPairs;
