import classNames from "classnames";

interface IClearAllBtnProps {
  isOpen: boolean;
}

const ClearAllBtn = (props: IClearAllBtnProps) => {
  return (
    <div
      className={classNames(
        "ml-auto mb-2 transition-all",
        !props.isOpen ?? "hidden opacity-0"
      )}
    >
      <button className="text-xs">Clear All</button>
    </div>
  );
};

export default ClearAllBtn;
