import { PropsWithChildren } from "react";

export const Nav = ({ children }: PropsWithChildren) => {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
};

export const NavItem = ({ children }: PropsWithChildren) => {
  return <li>{children}</li>;
};

type NavItemLinkProps = {
  href: string;
};

export const NavItemLink = ({
  children,
  href,
}: PropsWithChildren<NavItemLinkProps>) => {
  return <a href={href}>{children}</a>;
};
