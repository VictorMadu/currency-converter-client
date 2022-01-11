export interface ISubmitBtnProps {
  text: string;
}

const SubmitBtn = (props: ISubmitBtnProps) => {
  return (
    <button className="bg-neutral-600 font-bold uppercase block text-white text-center w-full py-2">
      {props.text}
    </button>
  );
};

export default SubmitBtn;
