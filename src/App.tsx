import { FooterNav } from "components/common/navigation/FooterNav";
import { HeaderNavBar } from "components/common/navigation/HeaderNavBar";
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
