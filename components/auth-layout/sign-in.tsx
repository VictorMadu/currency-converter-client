import {
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import AuthForm from "../auth-form";
import { IBase } from "./types";

const SignIn: IBase = () => {
  return (
    <AuthForm>
      <AuthForm.Title text="Erate" />
      <div className="py-2 px-3 space-y-4">
        <AuthForm.InputGroup
          Icon={UserIcon}
          id={"email"}
          placeholder={"Email"}
          Input={<AuthForm.BaseInput type="email" id={"email"} />}
        />

        <AuthForm.InputGroup
          Icon={LockClosedIcon}
          id={"password"}
          placeholder={"Password"}
          Input={<AuthForm.BaseInput type="email" id={"email"} />}
        />
      </div>
      <AuthForm.SubmitBtn text="Sign In" />
    </AuthForm>
  );
};

SignIn.title = "Sign In";
SignIn.footer = {
  text: "Have an account already",
  onClick: () => {}
}

export default SignIn;
