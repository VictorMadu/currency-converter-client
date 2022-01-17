import classNames from "classnames";

interface IPriceViewProps {
  price: number;
  stylePriceTextSize?: string;
  stylePriceTextColor?: string;
}

const PriceView = (props: IPriceViewProps) => {
  const strPrice = props.price.toFixed(6);
  const startUpper = strPrice.length - 2;
  const truncatedPrice = strPrice.slice(0, startUpper);
  const upper = strPrice.slice(startUpper);

  return (
    <div className="relative flex">
      <p className={classNames(props.stylePriceTextSize, 'translate-y-0.5')}>{truncatedPrice}</p>
      <p
        className={classNames(
          "text-xs font-bold font-mono leading-3",
          props.stylePriceTextColor ?? "text-neutral-900/90"
        )}
      >
        {upper}
      </p>
    </div>
  );
};

export default PriceView;
