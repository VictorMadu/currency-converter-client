import type { NextPage } from "next";
import { useRouter } from "next/router";
import CurrencyConversionLayout from "../../components/currency-conversion-layout";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
import { useCurrencyContext } from "../../hooks/currency/context";
import { findIndex } from "lodash";
import { CurrencyPairProvider } from "../../hooks/currency-pair-index/context";
import { useCurrencyConversionHook } from "../../components/currency-conversion-layout/hooks";

const CurrencyPairs: NextPage = () => {
  const router = useRouter();
  const [state] = useCurrencyContext();

  const { currencyPair } = router.query as { currencyPair: string };
  const [base, quota] = currencyPair.split("-");

  const currencies = state.currencies;
  const baseIndex = findIndex(
    currencies,
    (currency) => currency.short === base
  );
  const quotaIndex = findIndex(
    currencies,
    (currency) => currency.short === quota
  );
  // TODO: currencyPair is undefined if page is reloaded inside of being opened from the currency list
  // HINT: I plan on putting the currency-pair-index at the top level and use it to populate the pages. The dispatch that will be called by a component to open this page will re-hydrate the currency-pair-index state and call the router to open this page
  if (baseIndex < 0) throw new Error("Invalid currency");
  if (quotaIndex < 0) throw new Error("Invalid currency");

  return (
    <CurrencyPairProvider value={{ baseIndex, quotaIndex }}>
      <Main>
        <HeaderTitleWithBack
          title={currencies[baseIndex].name + "/" + currencies[quotaIndex].name}
        />
        <CurrencyConversionLayout />
      </Main>
    </CurrencyPairProvider>
  );
};

export default CurrencyPairs;
