import { Header } from "./Header";
import { Aside } from "./Aside";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout">
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}