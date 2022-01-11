import { VoidFunc } from "../../types";

interface ISettingsToggleRadioProps {
  placeholder?: string;
  id: string;
  onClick: VoidFunc;
}

const SettingsToggleRadio = (props: ISettingsToggleRadioProps) => {
  let toggleChecked = true;

  return (
    <label htmlFor={props.id} className="inline-flex items-center gap-x-1.5">
      <input
        type="radio"
        name={props.id}
        id={props.id}
        onClick={(event) => {
          toggleChecked = !toggleChecked;
          props.onClick(event);
        }}
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default SettingsToggleRadio;
