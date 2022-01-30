import { NextPage } from "next";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { getCurrenciesAlerts } from "../../api";
import AlertTable from "../../components/alert-table";
import Header from "../../components/header";
import Main from "../../components/main";
import { selectUserToken } from "../../redux/user/user.selectors";
import { useRouter } from "next/router";
import { TYPES } from "../../components/auth-layout/types";
import { fetchAlertsStart } from "../../redux/alert/alert.actions";
import { fetchCurrenciesStart } from "../../redux/currency/currency.actions";
import {
  selectCurrencyBase,
  selectCurrencyPairsObj,
} from "../../redux/currency/currency.selectors";
import { useAppDispatch, useAppSelector } from "../../redux";

const Alert: NextPage = () => {
  const firstMount = useRef(true);
  const userToken = useAppSelector(selectUserToken);
  const baseCurrency = useAppSelector(selectCurrencyBase);
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Object.keys(currencyPairsObj).length) {
      dispatch(fetchCurrenciesStart(baseCurrency));
    }
  }, [currencyPairsObj, dispatch, baseCurrency]);

  useEffect(() => {
    if (!userToken) router.push(`/auth/${TYPES.LOGIN}`);
  }, [router, userToken]);

  useEffect(() => {
    if (
      userToken &&
      Object.keys(currencyPairsObj).length &&
      firstMount.current
    ) {
      dispatch(fetchAlertsStart({ token: userToken }));
      firstMount.current = false;
    }
  }, [userToken, dispatch, router, currencyPairsObj]);

  return (
    <>
      {userToken ? (
        <Main>
          <Header />
          <AlertTable />
        </Main>
      ) : (
        <React.Fragment />
      )}
    </>
  );
};

// TODO: Use server side rendering for getting alerts data

// export async function getServerSideProps() {
//   const data = await getCurrenciesAlerts();
//   return { props: { data } };
// }

export default Alert;
