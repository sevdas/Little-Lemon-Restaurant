import { Footer } from "./components/common/Footer";
import { NavBar } from "./components/common/NavBar";
import { Main } from "./components/common/Main";
import "styles/globals/_normalize.scss";

const App = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
};

export default App;
