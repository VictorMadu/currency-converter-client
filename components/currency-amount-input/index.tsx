import Abbrev from "./abbrev";
import Input from "./input";

interface ICurrencyAmountInput {
  inverted?: boolean;
}

const CurrencyAmountInput = (props: ICurrencyAmountInput) => {
  return (
    <div className="flex gap-x-2 items-center">
      {props.inverted ? (
        <>
          <Input />
          <Abbrev text="NGN" />
        </>
      ) : (
        <>
          <Abbrev text="USD" />
          <Input />
        </>
      )}
    </div>
  );
};

export default CurrencyAmountInput;
