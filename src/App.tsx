import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Aside } from "./components/Aside";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <Aside />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
