import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface ICurrency {
  short: string;
  name: string;
  prev_rate: number;
  curr_rate: number;
}

function onChange(
  newValue: string,
  changedCurrencyRate: number,
  setChangedCurrencyValue: Dispatch<SetStateAction<string>>,
  otherCurrencyRate: number,
  setOtherCurrencyValue: Dispatch<SetStateAction<string>>
) {
  newValue = newValue.replace(/,/g, "");
  if (!(newValue === "" || /^(\d+\.?\d*?|\d*?\.?\d+)$/.test(newValue))) return;

  setChangedCurrencyValue(newValue);
  const otherCurrencyNewValue =
    newValue === ""
      ? ""
      : (+newValue * otherCurrencyRate) / changedCurrencyRate;
  setOtherCurrencyValue(otherCurrencyNewValue.toString());
}

export function useCurrencyConversionHook(
  baseCurrency: ICurrency,
  quotaCurrency: ICurrency
) {
  const [baseValue, setBaseValue] = useState<string>("");
  const [quotaValue, setQuotaValue] = useState<string>("");

  const onBaseChange = (value: string) => {
    onChange(
      value,
      baseCurrency.curr_rate,
      setBaseValue,
      quotaCurrency.curr_rate,
      setQuotaValue
    );
  };

  const quotaChange = (value: string) => {
    onChange(
      value,
      quotaCurrency.curr_rate,
      setQuotaValue,
      baseCurrency.curr_rate,
      setBaseValue
    );
  };

  return [baseValue, onBaseChange, quotaValue, quotaChange] as [
    string,
    (value: string) => void,
    string,
    (value: string) => void
  ];
}
