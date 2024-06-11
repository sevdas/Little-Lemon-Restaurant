import { PropsWithChildren } from "react";

type ListType = "unordered" | "ordered";

type NavProps = {
  className?: string;
};

export const Nav = ({ children, className }: PropsWithChildren<NavProps>) => {
  return <nav className={className}>{children}</nav>;
};

type NavListProps = {
  type: ListType;
  className?: string;
};

export const NavMenu = ({
  children,
  type,
  className,
}: PropsWithChildren<NavListProps>) => {
  const ListComponent = type === "unordered" ? "ul" : "ol";
  return <ListComponent className={className}>{children}</ListComponent>;
};

type NavItemProps = {
  className?: string;
};

export const NavMenuItem = ({
  children,
  className,
}: PropsWithChildren<NavItemProps>) => {
  return <li className={className}>{children}</li>;
};

type NavItemLinkProps = {
  href: string;
  className?: string;
} & (
  | { target: "_blank"; rel: string }
  | { target?: "_self" | "_parent" | "_top"; rel?: string }
);

export const NavLink = ({
  children,
  href,
  target,
  rel,
  className,
}: PropsWithChildren<NavItemLinkProps>) => {
  // Improve security and performance by preventing the new page from gaining access to the page's window object via the window.opener property.
  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
};
