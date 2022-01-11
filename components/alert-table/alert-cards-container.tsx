import classNames from "classnames";
import { map, some } from "lodash";
import { currencyPairsTable, ICurrencyPairsTable } from "../../dummy";
import AlertTableCard from "./alert-table-card";
import ClearAllBtn from "./clear-all-btn";

interface IAlertCardContainerProps {
  index: number;
  isOpen: boolean;
}

function getAlerts(currenyPairs:Array<ICurrencyPairsTable>, index: number ) {
  return currenyPairs[index].alerts ?? [];
}

function haveAnyTriggered(currenyPairs:Array<ICurrencyPairsTable>, index: number ) {
  return some(getAlerts(currenyPairs, index), (alert) => alert.triggedDate);
}


const AlertCardContainer = (props: IAlertCardContainerProps) => {
  return (
    <div
      className={classNames(
        "bg-neutral-300 shadow-inner flex flex-col px-2 pt-1 py-3 transition-all duration-300",
        !props.isOpen && "hidden opacity-0 h-0"
      )}
    >
     {haveAnyTriggered(currencyPairsTable, props.index) && <ClearAllBtn isOpen={props.isOpen} />}

      <div
        className={classNames(
          "flex space-x-4 w-full overflow-x-scroll pr-10 snap-x transition-all",
          !props.isOpen && "hidden opacity-0"
        )}
      >
        {map(getAlerts(currencyPairsTable, props.index), (alert) => (
          <AlertTableCard
            key={alert.id}
            targetPrice={alert.targetPrice}
            setDate={alert.setDate}
            triggeredDate={alert.triggedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default AlertCardContainer;
