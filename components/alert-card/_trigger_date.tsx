import { ServerIcon } from "@heroicons/react/outline";
import DateContainer from "./_date-container";

export interface ITriggerDateProps {
  day: number | null;
  month: number | null;
  year: number | null;
  styleDateText?: string;
}

const TriggerDate = (props: ITriggerDateProps) => {
  return (
    <DateContainer>
      <ServerIcon className="w-5 h-5 text-neutral-900/30" />

      {!(props.day === null || props.month === null || props.year === null ) ? (
        <span className="inline-flex flex-col">
          <span className="text-xs uppercase text-neutral-900/30">
            Triggered on{" "}
          </span>
          <span className={props.styleDateText}>{`${props.month}-${props.day}-${props.year}`}</span>{" "}
        </span>
      ) : (
        <span className="text-xs uppercase">Not yet triggered</span>
      )}
    </DateContainer>
  );
};

export default TriggerDate;
