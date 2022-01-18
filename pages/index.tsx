import axios from "axios";
import type { NextPage } from "next";
import { getCurrencyPrices } from "../api";
import CurrencyPricesTable from "../components/currency-prices-table";

import Header from "../components/header";
import Main from "../components/main";
import { ICurrencyPricesRes } from "../api/_dtypes";
import { useCurrencyContext } from "../hooks/currency/context";
import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { fetchCurrenciesSuccess } from "../redux/currencies/currencies.actions";

const Home: NextPage<{ data: ICurrencyPricesRes["data"] }> = ({ data }) => {
  // const [state, dispatch] = useCurrencyContext();
  // useEffect(() => {
  //   dispatch({ type: "update", payload: data });
  // }, [data, dispatch]);

  const dispatch = useDispatch();
  dispatch(fetchCurrenciesSuccess(data))

  return (
    <Main>
      <Header />
      <CurrencyPricesTable />
    </Main>
  );
};

export async function getServerSideProps() {
  const data = await getCurrencyPrices();
  return { props: { data } };
}

export default Home;
