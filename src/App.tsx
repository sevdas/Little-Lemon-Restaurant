import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavItem, Nav, NavItemLink } from "./components/Nav/Nav";
import { ReactComponent as Logo } from "./assets/Logo.svg";

const App = () => {
  return (
    <Main>
      <Header>
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
      </Header>
      <Footer>I am footer</Footer>
    </Main>
  );
};

export default App;
