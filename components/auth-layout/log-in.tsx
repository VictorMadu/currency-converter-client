import { UserIcon, LockClosedIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { loginUser } from "../../api";
import AuthForm from "../auth-form";
import { loginStart, loginSuccess } from "../../redux/user/user.actions";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux";
import { selectUserToken } from "../../redux/user/user.selectors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const userToken = useAppSelector(selectUserToken)
  const dispatch =  useAppDispatch();
  const router = useRouter();

  const handleSubmit  = () => {
    dispatch(loginStart({email, pwd}));
  }

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
        handleClick={handleSubmit}
      />
    </AuthForm>
  );
};


export default Login;
