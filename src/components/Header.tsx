import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Logo />
      </div>
      <Navigation />
    </header>
  );
}
