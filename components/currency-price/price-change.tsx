import classNames from "classnames";
import PriceChangeIcon from "./price-change-icon";


interface IPriceChangeProps {
  prevPrice: number;
  currPrice: number;
}

const PriceChange = (props: IPriceChangeProps) => {
  const diff = props.currPrice - props.prevPrice;

  const isPriceDown = diff < 0;
  const percentChange = Number(( Math.abs(diff * 100) / props.prevPrice)).toFixed(4) + '%'

  return (
    <div className={classNames("rounded-xl border border-neutral-700/30 flex items-center justify-end gap-x-1 px-1 text-xs", {
      'bg-neutral-400/60': isPriceDown,
      'bg-neutral-300/60': !isPriceDown,
    })}>
      {percentChange}
      <PriceChangeIcon isDown={isPriceDown} />
    </div>
  )
}

export default PriceChange
