import {
  ArrowNarrowDownIcon,
  ArrowNarrowUpIcon,
} from "@heroicons/react/outline";

interface IPriceChangeIconProps {
  isDown: boolean;
}

const PriceChangeIcon = (props: IPriceChangeIconProps) => {
  const Icon = props.isDown ? ArrowNarrowDownIcon : ArrowNarrowUpIcon;
  return <Icon className="h-3" />;
};

export default PriceChangeIcon;
