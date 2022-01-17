import CurrencyFlag from "../currency-flag";
import Dropdown from "../dropdown";

interface DropItemProps {
  short: string;
  full: string;
  handleClick: (currency: string) => void;
}

const DropItem = (props: DropItemProps) => {
  return (
    <Dropdown.Item onClick={() => props.handleClick(props.short)}>
      <div className="flex gap-x-2 items-center">
        <CurrencyFlag src={""} />
        <div className="flex gap-x-1 grow">
          <p>{props.full}</p>
          <p>{"(" + props.short + ")"}</p>
        </div>
      </div>
    </Dropdown.Item>
  );
};

export default DropItem;
