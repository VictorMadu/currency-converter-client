import { map } from "lodash";
import { currencyPairsTable } from "../../dummy";
import Card from "./card";
import CardContainer from "./card-container";
import CurrencyPairAndPrice from "./currency-pair-and-price";
import FilterDropdown from "./filter-dropdown";

const AlertCurrencyPairLayout = () => {
  return (
    <div className="flex flex-col px-[5%] h-full">
      <CurrencyPairAndPrice />
      <FilterDropdown />

      <CardContainer>
        {map(currencyPairsTable[0].alerts, (alert, index) => (
          <Card key={alert.id} id={index} />
        ))}
      </CardContainer>
    </div>
  );
};

export default AlertCurrencyPairLayout;
