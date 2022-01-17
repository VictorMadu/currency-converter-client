import Item from "../item"
import NavLink from "../nav-link"


interface NavItemProps {
  text: string;
  path: string;
  className?: string;
}

const NavItem = (props: NavItemProps) => {
  return (
    <Item>
      <NavLink href={props.path} className={props.className}>
          {props.text}
      </NavLink>
    </Item>
  )
}

export default NavItem
