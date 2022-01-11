import { map } from "lodash";
import { currencyPairsTable } from "../../dummy";
import CurrencyForm from "../currency-form";
import TableLayout from "../table-layout";
import CurrencyPair from "../currency-pair";
import CurrencyPrice from "../currency-price";
import ControlSection from "../control-section";

const CurrencyPricesTableSection = () => {
  return (
    <TableLayout>
      <div className="flex flex-col gap-y-5">
        <ControlSection />
        <div className="self-end">
          <CurrencyForm.Input
            id="quota_currency"
            placeholder="Quota Currency"
            styleWidth="w-1/3 max-w-32"
          />
        </div>
      </div>
      <TableLayout.Container>
        <TableLayout.Header>
          <div className="w-2/3 px-3 py-2 text-left">Currency Pair</div>
          <div className="w-1/3 px-3 py-2 text-left">Price</div>
        </TableLayout.Header>
        <TableLayout.Main>
          {map(currencyPairsTable, (item) => (
            <div className="bg-white/30 w-full">
              <TableLayout.Row key={item.id}>
                {/* TODO: Add full name in larger screen and increase the width of currency pair */}
                <CurrencyPair
                  baseFlag={item.baseFlag}
                  quotaFlag={item.baseFlag}
                  baseAbbrev={item.baseAbbrev}
                  quotaAbbrev={item.quotaAbbrev}
                  styleWidth="w-1/2"
                />

                <CurrencyPrice
                  prevPrice={item.prevPrice}
                  currPrice={item.currPrice}
                  styleWidth="w-1/2"
                />
              </TableLayout.Row>
            </div>
          ))}
        </TableLayout.Main>
      </TableLayout.Container>
    </TableLayout>
  );
};

export default CurrencyPricesTableSection;
