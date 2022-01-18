import { UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import { loginUser } from "../../api";
import AuthForm from "../auth-form";
import { IBase, TYPES } from "./types";
import {useDispatch} from 'react-redux';
import { fetchUserDetailsSuccess } from "../../redux/user/user.actions";

const Login: IBase = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =  useDispatch();

  return (
    <AuthForm>
      <AuthForm.Title text="Erate" />
      <div className="py-2 px-3 space-y-4">
        <AuthForm.InputGroup
          Icon={UserIcon}
          id={"email"}
          placeholder={"Email"}
          Input={
            <AuthForm.BaseInput
              type="email"
              id={"email"}
              value={email}
              onInputChange={setEmail}
            />
          }
        />

        <AuthForm.InputGroup
          Icon={LockClosedIcon}
          id={"password"}
          placeholder={"Password"}
          Input={
            <AuthForm.PwdInput
              id={"password"}
              value={password}
              onInputChange={setPassword}
            />
          }
        />
      </div>
      <AuthForm.SubmitBtn
        text="Sign In"
        handleClick={() => {
          Promise.resolve(loginUser(email, password)).then((data) => {
            if (!data) return; // handle error
            dispatch(fetchUserDetailsSuccess(data))
          });
        }}
      />
    </AuthForm>
  );
};

Login.title = "Log In";
Login.footer = {
  text: "Have an account already",
  route: TYPES.SIGN_UP,
};

export default Login;
