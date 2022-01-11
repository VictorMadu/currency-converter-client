import { currencyPairsTable } from "../../dummy";
import { RequiredProps } from "../../types";
import CurrencyPair from "../currency-pair";
import CurrencyPrice from "../currency-price";
import TableLayout from "../table-layout";
import ToggleBtn from "../toggle-btn";


interface ICurrencyPairProps {
  index: number;
  isOpen: boolean;
}


const PriceContainer = (props: ICurrencyPairProps) => {
  const currencyPair = currencyPairsTable[props.index]
  return (
    <TableLayout.Row>
    <div className="w-full flex flex-col gap-y-6">
      <div className="flex items-start justify-between w-full">
         {/* TODO: Add full name in larger screen and increase the width of currency pair */}

         {/* TODO: When appending to hooks and mediator. Ensure that it is only the id of the currency that is passed and this component will obtain the details by itseld */}

        {/* Some for the part of alert. But compare and contrast whether to choose stateless over statefull and props over state. */}

        <CurrencyPair
          baseFlag={currencyPair.baseFlag}
          quotaFlag={currencyPair.baseFlag}
          baseAbbrev={currencyPair.baseAbbrev}
          quotaAbbrev={currencyPair.quotaAbbrev}
          styleWidth="w-1/2"
        />

        <CurrencyPrice
          prevPrice={currencyPair.prevPrice}
          currPrice={currencyPair.currPrice}
          styleWidth="w-1/2"
        />
      </div>
      <div className="ml-auto mr-3">
        <ToggleBtn isOpen={props.isOpen} onClick={() => {}} />
      </div>
    </div>
  </TableLayout.Row>
 
  )
}

export default PriceContainer;
