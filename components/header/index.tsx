import { TYPES } from "../auth-layout/types";
import Item from "../item";
import NavLink from "../nav-link";
import NavItem from "./nav-item";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="flex justify-between items-end py-2 border-b border-neutral-500/30 px-[2%]">
      <NavLink href="/">
        <a className="font-bold text-neutral-900/90 text-xl">Erate </a>
      </NavLink>
      <nav>
        <ul className="flex gap-x-2 text-sm uppercase font-[Roboto]">
          <NavItem path="/alerts" text="Alerts" />
          <NavItem path="/settings" text="Settings" />

          {isLoggedIn ? (
            <>
            {/* TODO: Delete all users storage and disconnect websocket */}
              <NavItem path="/" text="Log out" />
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
