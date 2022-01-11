import { TrashIcon } from "@heroicons/react/outline";
import ButtonIcon from "../button-icon";

export interface ITrashBtnProps {
  onClick: () => void;
}

const TrashBtn = (props: ITrashBtnProps) => {
  return (
    <div className="grow flex pb-3 pr-3 items-end justify-end">
      <ButtonIcon Icon={TrashIcon} onClick={props.onClick} />
    </div>
  );
};

export default TrashBtn;
