import { SwitchVerticalIcon } from "@heroicons/react/outline";
import CurrencyAmountInput from "../currency-amount-input";
import CurrencyPair from "../currency-pair";
import PriceView from "../currency-price/price-view";
import IconBtn from "../icon-btn";
import PriceChart from "../price-chart";

const CurrencyConversionLayout = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center mt-5">
        <CurrencyPair
          baseFlag={""}
          quotaFlag={""}
          baseAbbrev={"NGN"}
          quotaAbbrev={"USD"}
        />
        <PriceView price={123.454846} />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-3 mt-10">
        <CurrencyAmountInput inverted />
        <IconBtn Icon={SwitchVerticalIcon} onClick={() => {}} />
        <CurrencyAmountInput inverted />
      </div>

      <div className="mt-10">
        <PriceChart />
      </div>
    </div>
  );
};

export default CurrencyConversionLayout;
