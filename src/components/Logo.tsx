import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="site-logo">
      ESLint<span>-KR</span>
    </Link>
  );
}
