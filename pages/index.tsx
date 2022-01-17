import axios from "axios";
import type { NextPage } from "next";
import { getCurrencyPrices } from "../api";
import CurrencyPricesTable from "../components/currency-prices-table";

import Header from "../components/header";
import Main from "../components/main";
import { ICurrencyPricesRes } from "../api/_dtypes";
import { useCurrencyContext } from "../hooks/currency/context";
import { useEffect, useRef } from "react";

const Home: NextPage<{data: ICurrencyPricesRes['data']}> = ({data}) => {
  const [state, dispatch] = useCurrencyContext();
  useEffect(() => {
    dispatch({type: 'update', payload: data})
  }, [data, dispatch])
  
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

export async function getServerSideProps() {
  const data = await getCurrencyPrices();
  return {props: {data}};
}

export default Home;
