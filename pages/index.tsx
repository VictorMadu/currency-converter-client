import type { NextPage } from "next";
import Head from "next/head";
import CurrencyConversionLayout from "../components/currency-conversion-layout";
import CurrencyPricesTable from "../components/currency-prices-table";

import Header from "../components/header";
import Main from "../components/main";

const Home: NextPage = () => {
  return (
    <Main>
      <>
        <Header />
        <CurrencyPricesTable />
      </>
      {/* When a currency pair is clicked show this currencyPairs page */}
    </Main>
  );
};

export default Home;
