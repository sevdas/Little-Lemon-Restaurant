// import { NavItem, Nav, NavItemLink } from "@/components/common/Nav/Nav";
import { NavItem, Nav, NavItemLink } from "../Nav/Nav";
import { ReactComponent as Logo } from "@/assets/Logo.svg";

export const Header = () => {
  return (
    <header>
      <Logo />

      <Nav>
        <NavItem>
          <NavItemLink href="/home">Home</NavItemLink>
        </NavItem>

        <NavItem>
          <NavItemLink href="/about">About</NavItemLink>
        </NavItem>

        <NavItem>
          <NavItemLink href="/menu">Menu</NavItemLink>
        </NavItem>

        <NavItem>
          <NavItemLink href="/reservations">Reservations</NavItemLink>
        </NavItem>

        <NavItem>
          <NavItemLink href="/online-order">Order Online</NavItemLink>
        </NavItem>

        <NavItem>
          <NavItemLink href="/login">Login</NavItemLink>
        </NavItem>
      </Nav>
    </header>
  );
};
