import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Manual from "./pages/Manual";
import Ranking from "./pages/Ranking"
import Game from "./pages/Game";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Manual" element={<Manual />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/Ranking" element={<Ranking />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}

export default App;
