import { NextPage } from "next";
import { useRouter } from "next/router";
import Login from "../../components/auth-layout/log-in";
import SignUp from "../../components/auth-layout/sign-up";
import { IBase, TYPES } from "../../components/auth-layout/types";
import Dot from "../../components/dot";
import HeaderTitleWithBack from "../../components/header-title-with-back";
import Main from "../../components/main";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../redux/user/user.selectors";
import { useEffect } from "react";

const Auth: NextPage = () => {
  const router = useRouter();
  const authType = router.query.authType;
  const AuthLayout: IBase = authType === TYPES.LOGIN ? Login : SignUp;
  const userToken = useSelector(selectUserToken);

  useEffect(() => {
    if (!!userToken) {
      router.push("/");
    }
  }, [userToken, router]);
  return (
    <Main>
      <HeaderTitleWithBack title={AuthLayout.title} />

      <div className="my-auto">
        <AuthLayout />
        <div className="flex items-center gap-x-2 pl-1 mt-3">
          <Dot />
          <button
            className="text-sm text-neutral-500 inline-block"
            onClick={() => {
              router.push(`/auth/${AuthLayout.footer.route}`);
            }}
          >
            {AuthLayout.footer.text}
          </button>
        </div>
      </div>
    </Main>
  );
};

export default Auth;
