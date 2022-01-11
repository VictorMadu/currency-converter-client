import classNames from "classnames";
import PriceChange from "./price-change";
import PriceView from "./price-view";

interface ICurrencyPriceProps {
  prevPrice: number;
  currPrice: number;
  styleWidth?: string
}


const CurrencyPrice = (props: ICurrencyPriceProps) => {
  return (
    <span className={classNames("inline-flex flex-col items-end gap-y-3", props.styleWidth ?? "w-full")}>
       <PriceView price={props.currPrice} />
        <PriceChange prevPrice={props.prevPrice} currPrice={props.currPrice} />
    </span>
  )
}

export default CurrencyPrice

