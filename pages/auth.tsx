import { NextPage } from "next";
import Head from "next/head";
import SignIn from "../components/auth-layout/sign-in";
import SignUp from "../components/auth-layout/sign-up";
import { IBase } from "../components/auth-layout/types";
import Dot from "../components/dot";
import HeaderTitleWithBack from "../components/header-title-with-back";
import Main from "../components/main";

const Auth: NextPage = () => {
  const isSignIn = false;
  const AuthLayout: IBase = isSignIn ? SignIn : SignUp;
  return (
    <Main>
      <HeaderTitleWithBack title={AuthLayout.title} />

      <div className="my-auto">
        <AuthLayout />
        <div className="flex items-center gap-x-2 pl-1 mt-3">
          <Dot />
          <button
            className="text-sm text-neutral-500 inline-block"
            onClick={AuthLayout.footer.onClick}
          >
            {AuthLayout.footer.text}
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Auth;
