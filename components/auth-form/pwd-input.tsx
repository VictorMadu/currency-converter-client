import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";
import BaseInput from "./_base-input";

export interface IPwdInputProps {
  id: string;
  value: string;
  onInputChange: (value: string) => void;
}

const PwdInput = (props: IPwdInputProps) => {
  const [isHidden, setIsHidden] = useState(true);
  const Icon = isHidden ? EyeIcon : EyeOffIcon;
  return (
    <div className="relative w-full">
      <BaseInput
        id={props.id}
        type={isHidden ? "password" : "text"}
        padding="py-1 pl-2 pr-8"
        value={props.value}
        onInputChange={props.onInputChange}
      />
      <Icon
        className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-2"
        onClick={() => setIsHidden((isHidden) => !isHidden)}
      />
    </div>
  );
};

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
