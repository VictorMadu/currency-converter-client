import { ChangeEvent, useState } from "react";
import Abbrev from "./abbrev";
import Input from "./input";
import { numberWithCommas, numStrClean, Observable } from "../../hooks/logic";

interface ICurrency {
  short: string;
  name: string;
  prev_rate: number;
  curr_rate: number;
}

interface ICurrencyAmountInput {
  inverted?: boolean;
  value: string;
  currency: ICurrency
  onInputChange: (value: string) => void;
}

const CurrencyAmountInput = (props: ICurrencyAmountInput) => {

  const CurrencyAbbrev = <Abbrev text={props.currency.short} />;
  const CurrencyInput = (
    <Input
      value={props.value}
      onInputChange={(event) => {
        props.onInputChange(event.target.value);
      }}
    />
  );

  const first = props.inverted ? CurrencyAbbrev : CurrencyInput;
  const second = props.inverted ? CurrencyInput : CurrencyAbbrev;
  return (
    <div className="flex gap-x-2 items-center">
      {first}
      {second}
    </div>
  );
};

export default CurrencyAmountInput;
