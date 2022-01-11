import NavItem from "../nav-item";

const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="flex justify-between items-end py-2 border-b border-neutral-500/30 px-[2%]">
      <p className="font-bold text-neutral-900/90 text-xl">Erate</p>
      <nav>
        <ul className="flex gap-x-2 text-sm uppercase font-[Roboto]">
          <NavItem>Alerts</NavItem>
          <NavItem>Settings</NavItem>
          {isLoggedIn ? (
            <>
              <NavItem>Log out</NavItem>
            </>
          ) : (
            <>
              <NavItem>Sign Up</NavItem>
              <NavItem>Sign In</NavItem>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
