import classNames from "classnames";
import { useEffect, useState } from "react";

interface ISwitchInputProps {
  isOn?: boolean;
  id: string;
  initCheck: boolean;
  onCheckChanged: (isChecked: boolean) => void;
}

const SwitchInput = (props: ISwitchInputProps) => {
  const [checked, setChecked] = useState(props.initCheck);

  const handleClick = () => {
    const newChecked = !checked;
    props.onCheckChanged(newChecked);
    setChecked(newChecked)
  }


  return (
    <div
      className={classNames(
        "relative w-10 h-5 transition duration-200 ease-linear rounded-full shrink-0",
        { "bg-neutral-500": !checked, "bg-neutral-700": checked }
      )}
    >
      <label
        onClick={handleClick}
        htmlFor="toggle"
        className={classNames(
          "absolute left-0 w-5 h-5 transition duration-100 ease-linear transform bg-neutral-100 rounded-full cursor-pointer shadow-lg",
          {
            "translate-x-0 border-neutral-600": !checked,
            "translate-x-full border-neutral-400": checked,
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
