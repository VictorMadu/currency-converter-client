import classNames from "classnames";

interface IDotProps {
  size?: string;
}

const Dot = (props: IDotProps) => {
  return (
    <span
      className={classNames(
        "inline-block bg-neutral-700 rounded-full",
        props.size ?? "w-[6px] h-[6px]"
      )}
    ></span>
  );
};

export default Dot;
