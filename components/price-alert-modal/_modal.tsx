import ModalRoot from "../modal-root";
import Dot from "../dot";

interface IPriceAlertModalProps {
  base: string;
  quota: string;
  triggeredTime: Date;
  msg: string;
  onClose: () => void;
}

const PriceAlertModal = (props: IPriceAlertModalProps) => {
  return (
    <div className="absolute bg-neutral-100 gap-x-5 items-start inset-x-1 top-0.5 shadow-lg rounded font-[Roboto]overflow-hidden">
      <div className="bg-neutral-200 px-6 py-2 flex justify-between items-center">
        <div className="flex gap-x-6 items-center">
          <Dot size="w-3 h-3" />
          <p className="font-bold">
            {props.base + "/" + props.quota}
          </p>
        </div>
        <button onClick={() => {
          console.log("Clicked")
          props.onClose()
        }} className="font-bold text-2xl shrink-0">
          &times;
        </button>
      </div>
      <div className="text-lg text-neutral-900/80 grow px-6 py-4">
        {props.msg}
      </div>
      <div className="px-6 pb-2 text-sm">
        <p className="block text-right">
          {props.triggeredTime.getDate() +
            "-" +
            props.triggeredTime.getMonth() +
            1 +
            "-" +
            props.triggeredTime.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default PriceAlertModal;
