import type { NextPage } from "next";
import { useRouter } from "next/router";
import CurrencyConversionLayout from "../../components/currency-conversion-layout";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
// import { useCurrencyContext } from "../../hooks/currency/context";
import { findIndex } from "lodash";
// import { CurrencyPairProvider } from "../../hooks/currency-pair-index/context";currency-conversion-layout/hooks";
import { useSelector } from "react-redux";
import { selectCurrencyPairs } from "../../redux/currencies/currencies.selectors";
import { useEffect } from "react";

const CurrencyPairs: NextPage = () => {
  const router = useRouter();
  const currencyPairs = useSelector(selectCurrencyPairs);

  const { currencyPair } = router.query as { currencyPair: string };
  const [base, quota] = currencyPair ? currencyPair.split("-") : [["", ""]];

  let baseIndex = findIndex(
    currencyPairs,
    (currency) => currency.short === base
  );
  let quotaIndex = findIndex(
    currencyPairs,
    (currency) => currency.short === quota
  );

  const baseName = baseIndex > -1 ? currencyPairs[baseIndex].name : "";
  const quotaName = quotaIndex > -1 ? currencyPairs[quotaIndex].name : "";
  // TODO: currencyPair is undefined if page is reloaded inside of being opened from the currency list
  // HINT: I plan on putting the currency-pair-index at the top level and use it to populate the pages. The dispatch that will be called by a component to open this page will re-hydrate the currency-pair-index state and call the router to open this page
  // if (baseIndex < 0) throw new Error("Invalid currency");
  // if (quotaIndex < 0) throw new Error("Invalid currency");

  useEffect(() => {
    if (!(currencyPairs && currencyPairs.length && baseName && quotaName))
      router.push("/");
  }, [currencyPairs, baseName, quotaName, router]);

  return (
    <Main>
      <HeaderTitleWithBack title={baseName + "/" + quotaName} />
      {currencyPairs && currencyPairs.length && baseName && quotaName ? (
        <CurrencyConversionLayout
          baseIndex={baseIndex}
          quotaIndex={quotaIndex}
        />
      ) : (
        <></>
      )}
    </Main>
  );
};

export default CurrencyPairs;
