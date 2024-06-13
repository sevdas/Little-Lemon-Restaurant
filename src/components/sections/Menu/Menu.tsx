import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type ListType = "unordered" | "ordered";

type MenuNavProps = {
  className?: string;
};

export const MenuNav = ({
  children,
  className,
}: PropsWithChildren<MenuNavProps>) => {
  return <nav className={className}>{children}</nav>;
};

type MenuListProps = {
  type: ListType;
  className?: string;
};

export const MenuList = ({
  children,
  type,
  className,
}: PropsWithChildren<MenuListProps>) => {
  const ListComponent = type === "unordered" ? "ul" : "ol";
  return <ListComponent className={className}>{children}</ListComponent>;
};

type MenuItemProps = {
  className?: string;
};

export const MenuItem = ({
  children,
  className,
}: PropsWithChildren<MenuItemProps>) => {
  return <li className={className}>{children}</li>;
};

type MenuLinkProps = {
  href: string;
  className?: string;
} & (
  | { target: "_blank"; rel: string }
  | { target?: "_self" | "_parent" | "_top"; rel?: string }
);

export const MenuLink = ({
  children,
  href,
  target,
  rel,
  className,
}: PropsWithChildren<MenuLinkProps>) => {
  // Improve security and performance by preventing the new page from gaining access to the page's window object via the window.opener property.
  return (
    // <a href={href} target={target} rel={rel} className={className}>
    //   {children}
    // </a>

    <Link to={href} className={className}>
      {children}
    </Link>
  );
};
