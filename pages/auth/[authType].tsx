import { NextPage } from "next";
import { useRouter } from "next/router";
import Login from "../../components/auth-layout/log-in";
import { TYPES } from "../../components/auth-layout/types";
import Dot from "../../components/dot";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/user/user.selectors";
import SignUp from "../../components/auth-layout/sign-up";
import { useEffect, useState } from "react";

const Auth: NextPage = () => {
  const router = useRouter();
  const userToken = useSelector(selectUserToken);
  const authType = router.query.authType;
  const isLogin = authType === TYPES.LOGIN;

  return (
    <>
      {userToken ? (
        router.push('/')
      ) : (
        <Main>
          <HeaderTitleWithBack title={isLogin ? "Log In" : "Sign Up"} />

          <div className="my-auto">
            {isLogin ? <Login /> : <SignUp />}
            <div className="flex items-center gap-x-2 pl-1 mt-3">
              <Dot />
              <button
                className="text-sm text-neutral-500 inline-block"
                onClick={() =>
                  router.replace(
                    `/auth/${isLogin ? TYPES.SIGN_UP : TYPES.LOGIN}`
                  )
                }
              >
                {isLogin
                  ? "Don't have an account yet"
                  : "Have an account already"}
              </button>
            </div>
          </div>
        </Main>
      )}
    </>
  );
};

export default Auth;
