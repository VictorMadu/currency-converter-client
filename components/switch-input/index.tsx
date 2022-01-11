import classNames from "classnames";

interface ISwitchInputProps {
  isOn?: boolean;
  id: string;
  onToggle: (newToggle: boolean) => void;
}

const SwitchInput = (props: ISwitchInputProps) => {
  const isOn = !!props.isOn;
  return (
    <div
      className={classNames(
        "relative w-10 h-5 transition duration-200 ease-linear rounded-full shrink-0",
        { "bg-neutral-500": !isOn, "bg-neutral-700": isOn }
      )}
    >
      <label
        onClick={() => props.onToggle(isOn)}
        htmlFor="toggle"
        className={classNames(
          "absolute left-0 w-5 h-5 transition duration-100 ease-linear transform bg-neutral-100 rounded-full cursor-pointer shadow-lg",
          {
            "translate-x-0 border-neutral-600": !isOn,
            "translate-x-full border-neutral-400": isOn,
          }
        )}
      ></label>
      <input
        type="checkbox"
        name="switch"
        id="switch"
        className="w-full h-full appearance-none focus:outline-none"
      />
    </div>
  );
};

export default SwitchInput;
