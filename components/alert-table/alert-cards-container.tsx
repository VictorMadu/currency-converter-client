import classNames from "classnames";
import { map, some } from "lodash";
import {  ICurrencyPairsTable } from "../../dummy";
import { useAppSelector } from "../../redux";
import { selectAlertsDataObj } from "../../redux/alert/alert.selectors";
import AlertTableCard from "./alert-table-card";

interface IAlertCardContainerProps {
  alertsKey: string;
  isOpen: boolean;
}

function getAlerts(currenyPairs:Array<ICurrencyPairsTable>, index: number ) {
  return currenyPairs[index].alerts ?? [];
}

function haveAnyTriggered(currenyPairs:Array<ICurrencyPairsTable>, index: number ) {
  return some(getAlerts(currenyPairs, index), (alert) => alert.triggedDate);
}


const AlertCardContainer = (props: IAlertCardContainerProps) => {
  const alertsDataObj = useAppSelector(selectAlertsDataObj);
  return (
    <div
      className={classNames(
        "bg-neutral-300 shadow-inner flex flex-col px-2 pt-1 py-3 transition-all duration-300",
        !props.isOpen && "hidden opacity-0 h-0" 
      )}
    >
     {/* {haveAnyTriggered(currencyPairsTable, props.index) && <ClearAllBtn isOpen={props.isOpen} />} */}

      <div
        className={classNames(
          "flex space-x-4 w-full overflow-x-auto pr-10 snap-x transition-all",
          !props.isOpen && "hidden opacity-0"
        )}
      >
        {map(alertsDataObj[props.alertsKey], (alertData) => (
          <AlertTableCard
            key={alertData.id}
            targetPrice={alertData.target_rate}
            setTime={alertData.set_time}
            setRate={alertData.set_rate}
            triggeredTime={alertData.triggered_time}
            triggeredRate={alertData.triggered_rate}
          />
        ))}
      </div>
    </div>
  );
};

export default AlertCardContainer;
