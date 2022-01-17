import {
  UserIcon,
  DeviceMobileIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import AuthForm from "../auth-form";
import { IBase } from "./types";

const SignUp: IBase = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  return (
    <AuthForm>
      <AuthForm.Title text="Erate" />
      <div className="py-2 px-3 space-y-4">
        <AuthForm.InputGroup
          Icon={UserIcon}
          id={"email"}
          placeholder={"Email"}
          Input={<AuthForm.BaseInput type="email" id={"email"} value={email} onInputChange={setEmail}  />}
        />
        <AuthForm.InputGroup
          Icon={DeviceMobileIcon}
          id={"tel"}
          placeholder={"Phone"}
          Input={<AuthForm.BaseInput type="tel" id={"phone"} value={phone} onInputChange={(value: string) => {
            if (!/^\d{0,11}$/.test(value)) return;
            setPhone(value)
          }} />}
        />
        <AuthForm.InputGroup
          Icon={LockClosedIcon}
          id={"password"}
          placeholder={"Password"}
          Input={<AuthForm.PwdInput id={"password"} value={password} onInputChange={setPassword} />}
        />
      </div>
      <AuthForm.SubmitBtn text="Sign Up" />
    </AuthForm>
  );
};


SignUp.title = "Sign Up";
SignUp.footer = {
  text: "Don't have an account yet",
  onClick: () => {}
}

export default SignUp;
