import {
  UserIcon,
  DeviceMobileIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import AuthForm from "../auth-form";
import { IBase } from "./types";

const SignUp: IBase = () => {
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
          Icon={DeviceMobileIcon}
          id={"tel"}
          placeholder={"Phone"}
          Input={<AuthForm.BaseInput type="tel" id={"email"} />}
        />
        <AuthForm.InputGroup
          Icon={LockClosedIcon}
          id={"password"}
          placeholder={"Password"}
          Input={<AuthForm.PwdInput id={"email"} />}
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
