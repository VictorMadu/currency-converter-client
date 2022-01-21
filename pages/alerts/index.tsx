import { NextPage } from "next";
import React, { useEffect, useLayoutEffect } from "react";
import { getCurrenciesAlerts } from "../../api";
import AlertTable from "../../components/alert-table";
import Header from "../../components/header";
import Main from "../../components/main";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken } from "../../redux/user/user.selectors";
import { useRouter } from "next/router";
import { TYPES } from "../../components/auth-layout/types";
import { fetchCurrenciesStart } from "../../redux/currency/currency.actions";

const Alert: NextPage = () => {
  const userToken = useSelector(selectUserToken);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect( () => {
    if (userToken) dispatch(fetchCurrenciesStart())
    else router.push(`/auth/${TYPES.LOGIN}`)
  }, [userToken, dispatch, router])
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
