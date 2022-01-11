import classNames from "classnames";
import CurrencyFlag from "../currency-flag";


interface ICurrencyPairProps {
  baseFlag: string;
  quotaFlag: string;
  baseFullName?: string;
  quotaFullName?: string;
  baseAbbrev: string;
  quotaAbbrev: string;
  styleWidth?: string;
}

// If in smaller screen use only abbrev but use both abbrev and full name in larger screen
const generateCurrencyName = (abbrev: string, fullName?: string) => {
  return fullName ? `${fullName} (${abbrev})` : abbrev;
};

const CurrencyPair = (props: ICurrencyPairProps) => {
  const baseName = generateCurrencyName(props.baseAbbrev, props.baseFullName);
  const quotaName = generateCurrencyName(
    props.quotaAbbrev,
    props.quotaFullName
  );
  return (
    <span
      className={classNames(
        "inline-flex gap-x-1 items-center uppercase text-sm",
        props.styleWidth ?? "w-1/2"
      )}
    >
      <CurrencyFlag src={props.baseFlag} />
      <p>{baseName + "/" + quotaName}</p>
      <CurrencyFlag src={props.quotaFlag} />
    </span>
  );
};

export default CurrencyPair;
