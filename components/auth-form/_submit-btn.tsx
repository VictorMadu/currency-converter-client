export interface ISubmitBtnProps {
  text: string;
  handleClick: () => void;
}

const SubmitBtn = (props: ISubmitBtnProps) => {
  return (
    <button
      className="bg-neutral-600 font-bold uppercase block text-white text-center w-full py-2"
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
};

export default SubmitBtn;
