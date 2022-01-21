import {  map } from "lodash";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CurrencyPair from "../currency-pair";
import CurrencyPrice from "../currency-price";
import SearchInput from "../search-input";
import TableLayout from "../table-layout";
import ControlSection from "./control-section";
import {
  selectCurrencyBase,
  selectCurrencyLists,
  selectCurrencyPairsObj,
} from "../../redux/currency/currency.selectors";
import { useAppSelector } from "../../redux";

const CurrencyTableLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  const baseCurrency = useAppSelector(selectCurrencyBase);
  const currencyLists = useAppSelector(selectCurrencyLists);
  const currencyPairs = useAppSelector(selectCurrencyPairsObj);
  const router = useRouter();

  const searchRegExp = new RegExp(
    searchInput
      .trim()
      .toLowerCase()
      .replace(/[\\[.+*?(){|^$]/g, "\\$&")
  );

  const filterSearchedCurrency = (currency: string) => {
    return (
      currency !== baseCurrency &&
      searchRegExp.test(
        currency.toLowerCase() + currencyPairs[currency].name.toLowerCase()
      )
    );
  };

  const handleClick = (base: string, quota: string) => {
    router.push("/currency/" + base + "-" + quota);
  };

  return (
    <TableLayout>
      <div className="flex flex-col gap-y-5">
        <ControlSection />
        <div className="self-end">
          <SearchInput
            value={searchInput}
            onInputChange={(event) => setSearchInput(event.target.value)}
            id="quota_currency"
            placeholder="Quota Currency"
            styleWidth="w-1/3 max-w-32"
          />
        </div>
      </div>
      <TableLayout.Container>
        <TableLayout.Header>
          <div className="w-2/3 px-3 py-2 text-left">Currency Pair</div>
          <div className="w-1/3 px-3 py-2 text-left">Price</div>
        </TableLayout.Header>
        <TableLayout.Main>
          {map(currencyLists, (currency: string) =>
            filterSearchedCurrency(currency) ? (
              <div
                key={currency}
                className="bg-white/30 w-full"
                onClick={() => handleClick(baseCurrency, currency)}
              >
                <TableLayout.Row>
                  {/* TODO: Add full name in larger screen and increase the width of currency pair */}
                  <CurrencyPair
                    baseFlag={"TODO IMPLEMENT FLAG"}
                    quotaFlag={"TODO IMPLEMENT FLAG"}
                    baseAbbrev={baseCurrency}
                    quotaAbbrev={currency}
                    styleWidth="w-1/2"
                  />

                  <CurrencyPrice
                    prevPrice={currencyPairs[currency].prev_rate}
                    currPrice={currencyPairs[currency].curr_rate}
                    styleWidth="w-1/2"
                  />
                </TableLayout.Row>
              </div>
            ) : (
              <React.Fragment key={currency} />
            )
          )}
        </TableLayout.Main>
      </TableLayout.Container>
    </TableLayout>
  );
};

export default CurrencyTableLayout;
