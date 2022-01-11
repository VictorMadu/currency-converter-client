import { NextPage } from "next";
import AlertFilterDropdown from "../../components/alert-filter-dropdown";
import CurrencyPair from "../../components/currency-pair";
import PriceView from "../../components/currency-price/price-view";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
import { map } from "lodash";
import { currencyPairsTable } from "../../dummy";
import AlertCard from "../../components/alert-card";
import AlertCurrencyPairLayout from "../../components/alert-currency-pair-layout";

const CurrencyPairs: NextPage = () => {
  return (
    <Main styleGapY="gap-y-6">
      <HeaderTitleWithBack title={"Nigerian Naira/US Dollars"} />
      <AlertCurrencyPairLayout />
    </Main>
  );
};

export default CurrencyPairs;
