import type { NextPage } from "next";
import { useRouter } from "next/router";
import CurrencyConversionLayout from "../../components/currency-conversion-layout";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
import { selectCurrencyLists, selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { fetchCurrenciesStart } from "../../redux/currency/currency.actions";

const CurrencyPairs: NextPage = () => {
  const router = useRouter();
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const dispatch = useAppDispatch();

  const { currencyPair } = router.query as { currencyPair: string };
  const [base, quota] = (currencyPair ? currencyPair.split("-") : [["", ""]]) as [string, string];


  const baseName = currencyPairsObj[base as string]?.name ?? ""
  const quotaName = currencyPairsObj[quota as string]?.name ?? "";
 
  useEffect(() => {
    if (!currencyPairsObj) dispatch(fetchCurrenciesStart())
  }, [dispatch, currencyPairsObj])

  useEffect(() => {
    if (!(baseName && quotaName))
      router.push("/");
  }, [currencyPairsObj, baseName, quotaName, router]);

  return (
    <Main>
      <HeaderTitleWithBack title={baseName + "/" + quotaName} />
      {currencyPairsObj && Object.keys(currencyPairsObj).length && baseName && quotaName ? (
        <CurrencyConversionLayout
        baseCurrency={base}
        quotaCurrency={quota}
        />
      ) : (
        <></>
      )}
    </Main>
  );
};

export default CurrencyPairs;
