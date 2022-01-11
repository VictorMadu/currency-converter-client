import classNames from "classnames";
import PriceView from "../currency-price/price-view";

export interface IPriceViewProps {
  targetPrice: number;
  styleBg?: string;
}

const AlertPriceView = (props: IPriceViewProps) => {
  return (
    <div className={classNames("flex justify-center py-1.5 w-full", props.styleBg)}>
      <PriceView price={props.targetPrice} />
    </div>
  );
};

export default AlertPriceView;
