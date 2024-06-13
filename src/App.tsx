import { Homepage } from "components/pages/Homepage/Homepage";
import "styles/globals/_normalize.scss";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default App;
