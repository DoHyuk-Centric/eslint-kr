import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Intro from "./pages/Intro";
import {Main} from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="intro" element={<Intro />} />
      </Route>
    </Routes>
  );
}

export default App;