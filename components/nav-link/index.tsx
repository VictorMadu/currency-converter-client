import Link, { LinkProps } from "next/link";
import React from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = (props: NavLinkProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <Link {...otherProps}>
      <a className={className} onClick={props.onClick}>{children}</a>
    </Link>
  );
};

export default NavLink;
