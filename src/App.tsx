import { FooterNav } from "components/common/FooterNav";
import { HeaderNavBar } from "components/common/HeaderNavBar";
import { Main } from "components/common/Main";
import "styles/globals/_normalize.scss";

const App = () => {
  return (
    <>
      <HeaderNavBar />
      <Main />
      <FooterNav />
    </>
  );
};

export default App;
