import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="header-nav">
      <NavLink to="/">가이드</NavLink>
      <NavLink to="https://github.com/DoHyuk-Centric/eslint-kr">GitHub</NavLink>
    </nav>
  );
}