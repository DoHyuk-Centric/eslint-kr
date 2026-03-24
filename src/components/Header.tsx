import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import { Search } from "./Search";

export function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <Logo />
        <Search />
      </div>
      <Navigation />
    </header>
  );
}
