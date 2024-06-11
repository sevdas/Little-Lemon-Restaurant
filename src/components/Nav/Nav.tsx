import { PropsWithChildren } from "react";

type NavItemLinkProps = {
  href: string;
};

export const NavItemLink = ({
  children,
  href,
}: PropsWithChildren<NavItemLinkProps>) => {
  return <a href={href}>{children}</a>;
};

export const NavItem = ({ children }: PropsWithChildren) => {
  return <li>{children}</li>;
};

export const Nav = ({ children }: PropsWithChildren) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};
