import { useState } from "react";
import AlertCard from "../alert-card";

interface IAlertCardProps {
  targetPrice: number;
  setTime: {
    day: number;
    month: number;
    year: number;
  };
  setRate: number;
  triggeredTime: {
    day: number | null;
    month: number | null;
    year: number | null;
  };
  triggeredRate?: number;
}

const AlertTableCard = (props: IAlertCardProps) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      {isVisible ? (
        <>
          <AlertCard>
            <AlertCard.PriceView
              targetPrice={props.targetPrice}
              styleBg="bg-neutral-200"
            />

            <div className="space-y-4 pl-4 pr-10">
              <AlertCard.SetDate
                day={props.setTime.day}
                month={props.setTime.month}
                year={props.setTime.year}
                styleDateText="font-bold"
              />

              <AlertCard.TriggerDate
               day={props.triggeredTime.day}
               month={props.triggeredTime.month}
               year={props.triggeredTime.year}
                styleDateText="font-bold"
              />
            </div>

            <AlertCard.TrashBtn onClick={() => {throw new Error('Not implemented')}} />
          </AlertCard>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AlertTableCard;
