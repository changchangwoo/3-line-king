import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Manual from "./pages/Manual";
import Ranking from "./pages/Ranking"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Manual" element={<Manual />} />
      <Route path="/Ranking" element={<Ranking />} />
    </Routes>
  );
}

export default App;
