export interface IInputGroupProps {
  Icon: (props: { className: string }) => JSX.Element;
  id: string;
  placeholder: string;
  Input: JSX.Element;
}

const InputGroup = (props: IInputGroupProps) => {
  return (
    <label
      htmlFor={props.id}
      className="flex gap-x-[3%] items-center text-neutral-900/30"
    >
      <props.Icon className="w-5 h-5 shrink-0" />
      <div className="flex flex-col items-start grow">
        <span className="font-bold uppercase tracking-wide text-xs font-[Roboto]">
          {props.placeholder}
        </span>
        {props.Input}
      </div>
    </label>
  );
};

export default InputGroup;