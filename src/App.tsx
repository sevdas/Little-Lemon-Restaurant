import "./App.css";
import { Header } from "./components/Header";

const App = () => {
  return (
    <main>
      <Header>
        Branding and Logo
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </Header>
      <footer>I am footer</footer>
    </main>
  );
};

export default App;
