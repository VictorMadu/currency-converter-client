import { SwitchVerticalIcon } from "@heroicons/react/outline";
import { useState } from "react";
import CurrencyAmountInput from "../currency-amount-input";
import CurrencyPair from "../currency-pair";
import PriceView from "../currency-price/price-view";
import IconBtn from "../icon-btn";
import PriceChart from "../price-chart";
import { useCurrencyConversionHook } from "./hooks";
import { useSelector } from "react-redux";
import { selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
import SetAlertModal from "../set-alert-modal";
import { useAppSelector } from "../../redux";
import { selectUserToken } from "../../redux/user/user.selectors";

interface CurrencyConversionLayoutProps {
  baseCurrency: string;
  quotaCurrency: string;
}

interface ICurrency {
  short: string;
  name: string;
  prev_rate: number;
  curr_rate: number;
}

const CurrencyConversionLayout = (props: CurrencyConversionLayoutProps) => {
  const [switched, setSwitched] = useState(false);
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const userToken = useAppSelector(selectUserToken);
  const [showSetAlertModal, setShowSetAlertModal] = useState(false);

  const currencyPair = [props.baseCurrency, props.quotaCurrency];

  const customhook = useCurrencyConversionHook(
    currencyPair[0],
    currencyPair[1]
  );

  return (
    <div className="">
      {showSetAlertModal ? <SetAlertModal baseCurrency={props.baseCurrency} quotaCurrency={props.quotaCurrency} onClose={() => setShowSetAlertModal(false)} /> : <></>}
      <div className="flex justify-end my-3">
        <button
          className="text-sm text-neutral-90/50 hover:underline"
          onClick={() => userToken && setShowSetAlertModal((show) => !show)}
        >
          Set Alert
        </button>
      </div>
      <div className="flex justify-between items-center mt-5">
        <CurrencyPair
          baseFlag={""}
          quotaFlag={""}
          baseAbbrev={props.baseCurrency}
          quotaAbbrev={props.quotaCurrency}
        />
        <PriceView price={currencyPairsObj[props.quotaCurrency].curr_rate} />
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
