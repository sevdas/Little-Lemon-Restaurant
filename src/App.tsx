import { Footer } from "./components/common/Footer";
import { Header } from "./components/common/Header";
import { Main } from "./components/common/Main";
import "styles/globals/_normalize.scss";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
