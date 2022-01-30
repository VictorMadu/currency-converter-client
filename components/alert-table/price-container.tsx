import { currencyPairsTable } from "../../dummy";
import { useAppSelector } from "../../redux";
import { selectAlertsDataObj } from "../../redux/alert/alert.selectors";
import { splitBaseAndQuota } from "../../redux/alert/alert.utils";
import { selectCurrencyPairsObj } from "../../redux/currency/currency.selectors";
import { RequiredProps } from "../../types";
import currencyPair from "../currency-pair";
import CurrencyPair from "../currency-pair";
import CurrencyPrice from "../currency-price";
import TableLayout from "../table-layout";
import ToggleBtn from "../toggle-btn";

interface ICurrencyPairProps {
  base: string;
  quota: string;
  isOpen: boolean;
  handleToggleOpen: () => void;
}

const PriceContainer = (props: ICurrencyPairProps) => {
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  console.log("currencyPairsObj", currencyPairsObj)
  console.log("baseCurrency", props.base)
  console.log("quotaCurrency", props.quota)

  const prevPrice = Object.keys(currencyPairsObj).length ? (
    currencyPairsObj[props.quota].prev_rate /
    currencyPairsObj[props.base].prev_rate
  ).toFixed(6) : (0).toFixed(6);

  const currPrice = Object.keys(currencyPairsObj).length ? (
    currencyPairsObj[props.quota].curr_rate /
    currencyPairsObj[props.base].curr_rate
  ).toFixed(6) : (0).toFixed(6);

  return (
    <TableLayout.Row>
      <div className="w-full flex flex-col gap-y-6">
        <div className="flex items-start justify-between w-full">
          {/* TODO: Add full name in larger screen and increase the width of currency pair */}

          {/* TODO: When appending to hooks and mediator. Ensure that it is only the id of the currency that is passed and this component will obtain the details by itseld */}

          {/* Some for the part of alert. But compare and contrast whether to choose stateless over statefull and props over state. */}

          <CurrencyPair
            baseFlag={props.base}
            quotaFlag={props.quota}
            baseAbbrev={props.base}
            quotaAbbrev={props.quota}
            styleWidth="w-1/2"
          />

          <CurrencyPrice
            prevPrice={parseFloat(prevPrice)}
            currPrice={parseFloat(currPrice)}
            styleWidth="w-1/2"
          />
        </div>
        <div className="ml-auto mr-3">
          <ToggleBtn isOpen={props.isOpen} onClick={props.handleToggleOpen} />
        </div>
      </div>
    </TableLayout.Row>
  );
};

export default PriceContainer;
