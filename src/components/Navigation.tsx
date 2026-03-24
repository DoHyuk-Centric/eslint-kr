import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="header-nav">
      <NavLink to="/">가이드</NavLink>
      <NavLink to="/rules">Rules 레퍼런스</NavLink>
      <NavLink to="/plugins">플러그인</NavLink>
      <NavLink to="https://github.com/DoHyuk-Centric/eslint-kr">GitHub</NavLink>
    </nav>
  );
}