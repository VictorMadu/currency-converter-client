import { useEffect, useState } from "react";
import { VoidFunc } from "../../types";

interface ISettingsToggleRadioProps {
  placeholder?: string;
  id: string;
  initCheck: boolean;
  onCheckChanged: (isChecked: boolean) => void;
}

const SettingsToggleRadio = (props: ISettingsToggleRadioProps) => {
  const [checked, setChecked] = useState(props.initCheck);



  const handleClick = () => {
    const newChecked = !checked;

  props.onCheckChanged(newChecked);
    setChecked(newChecked)
  }


  return (
    <label htmlFor={props.id} className="inline-flex items-center gap-x-1.5">
      <input
        type="radio"
        name={props.id}
        id={props.id}
        checked={checked}
        onClick={handleClick}
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default SettingsToggleRadio;
