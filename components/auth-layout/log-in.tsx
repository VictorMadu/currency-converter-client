import { UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { loginUser } from "../../api";
import AuthForm from "../auth-form";
import { TYPES } from "./types";
import {useDispatch} from 'react-redux';
import { loginStart, loginSuccess } from "../../redux/user/user.actions";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUserToken } from "../../redux/user/user.selectors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const userToken = useAppSelector(selectUserToken)
  const dispatch =  useAppDispatch();
  const router = useRouter();

  useEffect(() => {
   async function handleSubmit () {
      const data = await loginUser(email, pwd);
      if (!data) return // TODO: display error from server
      dispatch(loginSuccess(data))
    }

    if (isSubmit) handleSubmit()
  }, [dispatch, email, pwd, isSubmit])

  useEffect(() => {
    if (userToken)router.back()
  }, [userToken, router])

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
              value={pwd}
              onInputChange={setPwd}
            />
          }
        />
      </div>
      <AuthForm.SubmitBtn
        text="Sign In"
        handleClick={() => setIsSubmit(true)}
      />
    </AuthForm>
  );
};

// Login.title = "Log In";
// Login.footer = {
//   text: "Have an account already",
//   route: TYPES.SIGN_UP,
// };

export default Login;
