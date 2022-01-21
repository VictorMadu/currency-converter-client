import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useAppSelector } from "../../../redux";
import { selectCurrencyPairsObj } from "../../../redux/currency/currency.selectors";

interface ICurrency {
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
  baseCurrency: string,
  quotaCurrency: string
) {
  const currencyPairsObj = useAppSelector(selectCurrencyPairsObj);
  const [baseValue, setBaseValue] = useState<string>("");
  const [quotaValue, setQuotaValue] = useState<string>("");

  const onBaseChange = (value: string) => {
    onChange(
      value,
      currencyPairsObj[baseCurrency].curr_rate,
      setBaseValue,
      currencyPairsObj[quotaCurrency].curr_rate,
      setQuotaValue
    );
  };

  const quotaChange = (value: string) => {
    onChange(
      value,
      currencyPairsObj[quotaCurrency].curr_rate,
      setQuotaValue,
      currencyPairsObj[baseCurrency].curr_rate,
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
