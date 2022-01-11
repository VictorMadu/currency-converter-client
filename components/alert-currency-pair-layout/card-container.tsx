import { OrWithArr } from "../../types";

interface ICardContainerProps {
  children: OrWithArr<JSX.Element>;
}

const CardContainer = (props: ICardContainerProps) => {
  return (
    <div className="flex flex-col pt-1 mt-1 pb-24 gap-y-4 h-full shrink overflow-y-auto">
      {props.children}
    </div>
  );
};

export default CardContainer;
