import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import BaseInput from "./_base-input";

export interface IPwdInputProps {
  id: string;
  // onChange: VoidFunc
}


const PwdInput = (props: IPwdInputProps) => {
  const isHidden = true;
  const Icon = isHidden ? EyeIcon : EyeOffIcon
  return (
    <div className="relative w-full">
      <BaseInput id={props.id} type={isHidden ? "password" : "text"} padding="py-1 pl-2 pr-8" />
      <Icon className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-2" />
    </div>
  )
}

export default PwdInput;


// import { VoidFunc } from "../../types";

// export interface IBaseInputProps {
//   id: string;
//   type?: "text" | "password" | "tel" | "email" 
//   // onChange: VoidFunc
// }

// const BaseInput = (props: IBaseInputProps) => {
//   return (
//     <input
//       type={props.type ?? "text"}
//       name={props.id}
//       id={props.id}
//       className="bg-neutral-300 text-neutral-900/70 px-2 py-1 focus:outline-none rounded shadow-inner w-full"
//     />
//   );
// };

// export default BaseInput;
