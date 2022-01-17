import { map, filter, findIndex } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { currencyPairsTable } from "../../dummy";
import { useCurrencyContext } from "../../hooks/currency/context";
import CurrencyPair from "../currency-pair";
import CurrencyPrice from "../currency-price";
import SearchInput from "../search-input";
import TableLayout from "../table-layout";
import ControlSection from "./control-section";

const CurrencyTableLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  const [state] = useCurrencyContext();
  const router = useRouter();

  const currenciesData = state.currencies;
  const baseCurrencyIndex = findIndex(
    currenciesData,
    (currency) => currency.short === state.base
  );
  const baseCurrencyData = currenciesData[baseCurrencyIndex];

  const searchRegExp = new RegExp(
    searchInput
      .trim()
      .toLowerCase()
      .replace(/[\\[.+*?(){|^$]/g, "\\$&")
  );

  const filterCurrency = (currency: { short: string; name: string }) =>
    currency.short !== baseCurrencyData.short &&
    searchRegExp.test(
      currency.short.toLowerCase() + currency.name.toLowerCase()
    );

  const filteredCurrencies = filter(
    currenciesData,
    (currency, index) =>
      index !== baseCurrencyIndex &&
      searchRegExp.test(
        currency.short.toLowerCase() + currency.name.toLowerCase()
      )
  );

  const handleClick = (base: string, quota: string) => {
    router.push('/currency/' +  base + '-' + quota)
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
          {map(filteredCurrencies, (currency) =>
            filterCurrency(currency) ? (
              <div className="bg-white/30 w-full" onClick = {() => handleClick(baseCurrencyData.short, currency.short)}>
                <TableLayout.Row key={currency.short}>
                  {/* TODO: Add full name in larger screen and increase the width of currency pair */}
                  <CurrencyPair
                    baseFlag={"TODO IMPLEMENT FLAG"}
                    quotaFlag={"TODO IMPLEMENT FLAG"}
                    baseAbbrev={baseCurrencyData.short}
                    quotaAbbrev={currency.short}
                    styleWidth="w-1/2"
                  />

                  <CurrencyPrice
                    prevPrice={currency.prev_rate}
                    currPrice={currency.curr_rate}
                    styleWidth="w-1/2"
                  />
                </TableLayout.Row>
              </div>
            ) : (
              <></>
            )
          )}
        </TableLayout.Main>
      </TableLayout.Container>
    </TableLayout>
  );
};

export default CurrencyTableLayout;
