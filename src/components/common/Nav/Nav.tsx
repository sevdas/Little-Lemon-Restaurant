import { PropsWithChildren } from "react";

type NavProps = {
  className?: string;
};

export const Nav = ({ children, className }: PropsWithChildren<NavProps>) => {
  return (
    <nav className={className}>
      <ul>{children}</ul>
    </nav>
  );
};

type NavItem = {
  className?: string;
};

export const NavItem = ({
  children,
  className,
}: PropsWithChildren<NavItem>) => {
  return <li className={className}>{children}</li>;
};

type NavItemLinkProps = {
  href: string;
  className?: string;
};

export const NavItemLink = ({
  children,
  href,
  className,
}: PropsWithChildren<NavItemLinkProps>) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
