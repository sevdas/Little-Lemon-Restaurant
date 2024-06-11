import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavItem, Nav } from "./components/Nav/Nav";
import { ReactComponent as Logo } from "./assets/Logo.svg";

const App = () => {
  return (
    <Main>
      <Header>
        <Logo />
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Menu</NavItem>
          <NavItem>Reservations</NavItem>
          <NavItem>Order Online</NavItem>
          <NavItem>Login</NavItem>
        </Nav>
      </Header>
      <Footer>I am footer</Footer>
    </Main>
  );
};

export default App;
