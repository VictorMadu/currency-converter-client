import { SwitchVerticalIcon } from "@heroicons/react/outline";
import { ChangeEvent, useMemo, useState } from "react";
import { useCurrencyPairContext } from "../../hooks/currency-pair-index/context";
import { useCurrencyContext } from "../../hooks/currency/context";
import CurrencyAmountInput from "../currency-amount-input";
import { Observable } from "../../hooks/logic";
import CurrencyPair from "../currency-pair";
import PriceView from "../currency-price/price-view";
import IconBtn from "../icon-btn";
import PriceChart from "../price-chart";
import { map } from "lodash";
import { useCurrencyConversionHook } from "./hooks";

interface CurrencyConversionLayoutProps {}

interface ICurrency {
  short: string;
  name: string;
  prev_rate: number;
  curr_rate: number;
}

const getAbbrev = (currencies: ICurrency[], index: number | null) => {
  if (index === null) return "";
  return currencies[index].short;
};

const getPrice = (currencies: ICurrency[], index: number | null) => {
  if (index === null) return 0;
  return currencies[index].curr_rate;
};

const currencyDefault: ICurrency = {
  short: "",
  name: "",
  prev_rate: 0,
  curr_rate: 0,
};

const getCurrency = (currencies: ICurrency[], index: number | null) => {
  return index === null ? currencyDefault : currencies[index];
};

const CurrencyConversionLayout = (props: CurrencyConversionLayoutProps) => {
  const { baseIndex, quotaIndex } = useCurrencyPairContext();
  const [{ currencies }] = useCurrencyContext();
  const [switched, setSwitched] = useState(false);

  const currencyPair = useMemo(
    () => [
      getCurrency(currencies, baseIndex),
      getCurrency(currencies, quotaIndex),
    ],
    [currencies, baseIndex, quotaIndex]
  );
  const customhook = useCurrencyConversionHook(
    currencyPair[0],
    currencyPair[1]
  );

  return (
    <div className="">
      <div className="flex justify-between items-center mt-5">
        <CurrencyPair
          baseFlag={""}
          quotaFlag={""}
          baseAbbrev={getAbbrev(currencies, baseIndex)}
          quotaAbbrev={getAbbrev(currencies, quotaIndex)}
        />
        <PriceView price={getPrice(currencies, quotaIndex)} />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-3 mt-10">
        <CurrencyAmountInput
          inverted
          value={customhook[+switched * 2 + 0] as string}
          onInputChange={
            customhook[+switched * 2 + 1] as (value: string) => void
          }
          currency={currencyPair[+switched]}
        />
        <IconBtn
          Icon={SwitchVerticalIcon}
          onClick={() => setSwitched((switched) => !switched)}
        />
        <CurrencyAmountInput
          inverted
          value={customhook[+!switched * 2 + 0] as string}
          onInputChange={
            customhook[+!switched * 2 + 1] as (value: string) => void
          }
          currency={currencyPair[+!switched]}
        />
      </div>

      <div className="mt-10">
        <PriceChart />
      </div>
    </div>
  );
};

export default CurrencyConversionLayout;
