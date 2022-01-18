import { useEffect, useState } from "react";
import { TYPES } from "../auth-layout/types";
import Item from "../item";
import NavLink from "../nav-link";
import NavItem from "./nav-item";
import { useSelector, useDispatch } from "react-redux";
import { selectUserToken } from "../../redux/user/user.selectors";
import { clearUserDetails } from "../../redux/user/user.actions";

const Header = () => {
  // const [token, setToken] = useState<string | null>('');
  // useEffect(() => {
  //   localStorage && setToken(localStorage.getItem("token"))
  // }, [])
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);

  return (
    <header className="flex justify-between items-end py-2 border-b border-neutral-500/30 px-[2%]">
      <NavLink href="/" className="font-bold text-neutral-900/90 text-xl">
        Erate
      </NavLink>
      <nav>
        <ul className="flex gap-x-2 text-sm uppercase font-[Roboto]">
          <NavItem path="/alerts" text="Alerts" />
          <NavItem path="/settings" text="Settings" />

          {!!token ? (
            <>
              {/* TODO: Delete all users storage and disconnect websocket */}
              <NavItem
                path="/"
                text="Log out"
                onClick={() => dispatch(clearUserDetails())}
              />
            </>
          ) : (
            <>
              <NavItem path={`/auth/${TYPES.SIGN_UP}`} text="Sign Up" />
              <NavItem path={`/auth/${TYPES.LOGIN}`} text="Log in" />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
