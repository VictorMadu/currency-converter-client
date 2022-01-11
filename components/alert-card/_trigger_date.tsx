import { ServerIcon } from "@heroicons/react/outline";
import DateContainer from "./_date-container";

export interface ITriggerDateProps {
  triggeredDate?: string;
  styleDateText?: string;
}

const TriggerDate = (props: ITriggerDateProps) => {
  return (
    <DateContainer>
      <ServerIcon className="w-5 h-5 text-neutral-900/30" />

      {props.triggeredDate ? (
        <span className="inline-flex flex-col">
          <span className="text-xs uppercase text-neutral-900/30">
            Triggered on{" "}
          </span>
          <span className={props.styleDateText}>{props.triggeredDate}</span>{" "}
        </span>
      ) : (
        <span className="text-xs uppercase">Not yet triggered</span>
      )}
    </DateContainer>
  );
};

export default TriggerDate;
