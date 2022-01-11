import AlertCard from "../alert-card";

interface IAlertCardProps {
  targetPrice: number;
  setDate: string;
  triggeredDate?: string;
}

const AlertTableCard = (props: IAlertCardProps) => {
  return (
    <AlertCard>
      <AlertCard.PriceView
        targetPrice={props.targetPrice}
        styleBg="bg-neutral-200"
      />

      <div className="space-y-4 pl-4 pr-10">
        <AlertCard.SetDate setDate={props.setDate} styleDateText="font-bold" />

        <AlertCard.TriggerDate
          triggeredDate={props.triggeredDate}
          styleDateText="font-bold"
        />
      </div>

      <AlertCard.TrashBtn onClick={() => {}} />
    </AlertCard>
  );
};

export default AlertTableCard;
