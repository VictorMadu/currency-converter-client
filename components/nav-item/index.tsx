
type NavItemProps= {
  children: string | JSX.Element
}

const NavItem = (props: NavItemProps) => {
  return (
    <li className="inline-block cursor-pointer">
      {props.children}
    </li>
  )
}

export default NavItem
