import { currencyPairsTable } from "../../dummy";
import AlertCard from "../alert-card";

interface ICardProps {
  id: number;
}

const Card = (props: ICardProps) => {
  const alert = currencyPairsTable[0].alerts![props.id];

  return (
    <AlertCard styleShadow="shadow-lg" styleSnap="TODO: attach the snap" borderPos="left">
      <AlertCard.PriceView
        targetPrice={alert?.targetPrice ?? ""}
        styleBg="bg-neutral-200/50"
      />

      <div className="flex justify-between px-3">
        <AlertCard.SetDate setDate={alert?.setDate ?? ""} styleDateText="font-bold" />

        <AlertCard.TriggerDate
          triggeredDate={alert?.triggedDate ?? ""}
          styleDateText="font-bold"
        />
      </div>

      <AlertCard.TrashBtn onClick={() => {}} />
    </AlertCard>
  );
};

export default Card;
