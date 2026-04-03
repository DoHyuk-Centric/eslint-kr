import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Intro from "./pages/Intro";
import Install from "./pages/Install"
import Setting from "./pages/Setting"
import Rules from "./pages/Rules"
import RulesReference from "./pages/RulesReference"
import SettingFile from "./pages/SettingFile"
import Parser from "./pages/Parser"
import { Main } from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="intro" element={<Intro />} />
        <Route path="install" element={<Install />} />
        <Route path="setting" element={<Setting />} />
        <Route path="rules" element={<Rules />} />
        <Route path="rulesReference" element={<RulesReference />} />
        <Route path="settingFile" element={<SettingFile />} />
        <Route path="parser" element={<Parser />} />
      </Route>
    </Routes>
  );
}

export default App;