import { NavLink } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KO</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>시작하기</span>
        <span className="breadcrumb-sep">›</span>
        <span>ESLint란?</span>
      </nav>

      <div className="page-header">
        <h1>ESLint란?</h1>
        <p className="page-summary">
          ESLint는 JavaScript 코드에서 문제를 찾아내고 수정하는 정적 분석 도구입니다.
        </p>
      </div>

      <article className="article">
        <h2>ESLint란 무엇인가요?</h2>
        <p>
          ESLint는 코드를 실행하지 않고도 문제를 찾아내는
          <strong> 정적 분석 도구(linter)</strong>입니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
            <button
              className="copy-btn"
              onClick={() => {
                navigator.clipboard.writeText("복사할 코드");
              }}
            >
              복사
            </button>
          </div>
        </div>

        <h2>왜 써야 하나요?</h2>
        <h3>1. 버그를 미리 잡는다</h3>
        <p>런타임 전에 문제를 발견할 수 있습니다.</p>

        <h2>ESLint vs Prettier</h2>
        <p>두 도구는 역할이 다릅니다.</p>

        <nav className="doc-nav">
          <NavLink to="/" className="doc-nav-btn">
            ← 홈으로
          </NavLink>
          <NavLink to="/install" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </>
  );
}