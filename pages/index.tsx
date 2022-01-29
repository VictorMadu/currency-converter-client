import type { NextPage } from "next";
import { getCurrencyPrices } from "../api";
import CurrencyPricesTable from "../components/currency-prices-table";

import Header from "../components/header";
import Main from "../components/main";
import { ICurrencyPricesRes } from "../api/_dtypes";;
import { fetchCurrenciesStart, fetchCurrenciesSuccess } from "../redux/currency/currency.actions";
import { useAppDispatch, useAppSelector } from "../redux";
import { selectCurrenciesData, selectCurrencyBase } from "../redux/currency/currency.selectors";
import { useEffect } from "react";

const Home: NextPage<{ data: ICurrencyPricesRes["data"] }> = () => {
  const currencyBase = useAppSelector(selectCurrencyBase)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currencyBase)
    dispatch(fetchCurrenciesStart())
  }, [dispatch, currencyBase])

  return (
    <Main>
      <Header />
      {currencyBase ? <CurrencyPricesTable /> : <></>}
    </Main>
  );
};

// export async function getServerSideProps() {
//   const data = await getCurrencyPrices();
//   return { props: { data } };
// }


export default Home;
