import {
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import AuthForm from "../auth-form";
import { IBase } from "./types";

const Login: IBase = () => {
  const [email, setEmail] = useState('')
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
          Icon={LockClosedIcon}
          id={"password"}
          placeholder={"Password"}
          Input={<AuthForm.PwdInput id={"password"} value={password} onInputChange={setPassword} />}
        />
      </div>
      <AuthForm.SubmitBtn text="Sign In"  />
    </AuthForm>
  );
};

Login.title = "Log In";
Login.footer = {
  text: "Have an account already",
  onClick: () => {}
}

export default Login;
