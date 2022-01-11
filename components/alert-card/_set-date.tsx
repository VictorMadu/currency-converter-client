import { CogIcon } from "@heroicons/react/outline";
import DateContainer from "./_date-container";

export interface ISetDateProps {
  setDate: string;
  styleDateText?: string;
}

const SetDate = (props: ISetDateProps) => {
  return (
    <DateContainer>
      <CogIcon className="w-5 h-5 text-neutral-900/30" />
      <span className="inline-flex flex-col">
        <span className="text-xs uppercase text-neutral-900/30">Set on </span>
        <span className={props.styleDateText}>{props.setDate}</span>
      </span>
    </DateContainer>
  );
};

export default SetDate;
