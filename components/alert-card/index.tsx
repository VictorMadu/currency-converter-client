import classNames from "classnames";
import { OrWithArr } from "../../types";
import AlertPriceView, { IPriceViewProps } from "./_price-view";
import SetDate, { ISetDateProps } from "./_set-date";
import TrashBtn, { ITrashBtnProps } from "./_trash-btn";
import TriggerDate, { ITriggerDateProps } from "./_trigger_date";

interface IAlertCardProps {
  children: OrWithArr<JSX.Element>;
  styleShadow?: string;
  styleSnap?: string;
  borderPos?: "top" | "left";
}

interface IAlertCard {
  (props: IAlertCardProps): JSX.Element;
  PriceView: (props: IPriceViewProps) => JSX.Element;
  SetDate: (props: ISetDateProps) => JSX.Element;
  TriggerDate: (props: ITriggerDateProps) => JSX.Element;
  TrashBtn: (props: ITrashBtnProps) => JSX.Element;
}

const AlertCard: IAlertCard = (props) => {
  return (
    <div
      className={classNames(
        "shrink-0  min-w-52 bg-neutral-50 border-neutral-500 rounded-lg font-sans flex flex-col gap-y-6",
        props.styleShadow ?? "shadow",
        props.styleSnap ?? "snap-center",
        {
          "border-l-8": props.borderPos === "left",
          "border-t-8":
            props.borderPos === "top" || props.borderPos === undefined,
        }
      )}
    >
      {props.children}
    </div>
  );
};

AlertCard.PriceView = AlertPriceView;
AlertCard.SetDate = SetDate;
AlertCard.TriggerDate = TriggerDate;
AlertCard.TrashBtn = TrashBtn;

export default AlertCard;
