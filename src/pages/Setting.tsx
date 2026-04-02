import { NavLink } from "react-router-dom";

const eslintconfigjsFastOptions = `import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist/", "coverage/"]),

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      eqeqeq: "error",
      "prefer-const": "warn",
      "no-console": "off",
    },
  },
]);`;

export default function Setting() {
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("코드가 복사되었습니다.");
    } catch (error) {
      console.error(error);
      alert("복사에 실패했습니다.");
    }
  };
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>시작하기</span>
        <span className="breadcrumb-sep">›</span>
        <span>설정</span>
      </nav>

      <div className="page-header">
        <h1>설정(Settings)</h1>
      </div>

      <article className="article">
        <h2>빠른 시작 설정</h2>
        <p>초보자에겐 다음과 같은 시작 설정을 추천합니다.</p>
        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
            <button
              className="copy-btn"
              onClick={() => handleCopy(eslintconfigjsFastOptions)}
            >
              복사
            </button>
          </div>
          <pre>
            <code>
              <span className="tk-comment">// eslint.config.js</span>
              {"\n"}
              <span className="tk-kw-import">import</span> {"{"}{" "}
              <span className="tk-key">defineConfig, globalIgnores</span> {"}"}{" "}
              <span className="tk-kw-import">from</span>{" "}
              <span className="tk-str">"eslint/config"</span>;{"\n\n"}
              <span className="tk-kw-import">export</span>{" "}
              <span className="tk-kw-import">default</span>{" "}
              <span className="tk-fn">defineConfig</span>([{"\n  "}
              <span className="tk-fn">globalIgnores</span>([
              <span className="tk-str">"dist/"</span>,{" "}
              <span className="tk-str">"coverage/"</span>
              ]),{"\n\n  "}
              {"{"}
              {"\n    "}
              <span className="tk-key">files</span>: [
              <span className="tk-str">"**/*.js"</span>],
              {"\n    "}
              <span className="tk-key">languageOptions</span>: {"{"}
              {"\n      "}
              <span className="tk-key">ecmaVersion</span>:{" "}
              <span className="tk-str">"latest"</span>,{"\n      "}
              <span className="tk-key">sourceType</span>:{" "}
              <span className="tk-str">"module"</span>,{"\n      "}
              <span className="tk-key">globals</span>: {"{"}
              {"\n        "}
              <span className="tk-key">console</span>:{" "}
              <span className="tk-str">"readonly"</span>,{"\n      "}
              {"}"},{"\n    "}
              {"}"},{"\n    "}
              <span className="tk-key">linterOptions</span>: {"{"}
              {"\n      "}
              <span className="tk-key">
                reportUnusedDisableDirectives
              </span>: <span className="tk-str">"error"</span>,{"\n    "}
              {"}"},{"\n    "}
              <span className="tk-key">rules</span>: {"{"}
              {"\n      "}
              <span className="tk-str">"no-unused-vars"</span>:{" "}
              <span className="tk-str">"error"</span>,{"\n      "}
              <span className="tk-str">"no-undef"</span>:{" "}
              <span className="tk-str">"error"</span>,{"\n      "}
              <span className="tk-key">eqeqeq</span>:{" "}
              <span className="tk-str">"error"</span>,{"\n      "}
              <span className="tk-str">"prefer-const"</span>:{" "}
              <span className="tk-str">"warn"</span>,{"\n      "}
              <span className="tk-str">"no-console"</span>:{" "}
              <span className="tk-str">"off"</span>,{"\n    "}
              {"}"},{"\n  "}
              {"}"},{"\n"}
              ]);
            </code>
          </pre>
        </div>
        <p>
          <code>globalIgnores</code>
          <br />
          <code>globalIgnores(["dist/", "coverage/"])</code>- dist, coverage
          폴더는 ESLint 검사에서 제외
        </p>
        <p>
          <code>languageOptions</code>
          <br />
          <code>ecmaVersion: "latest"</code>- 최신 ES 문법 허용
          <br />
          <code>sourceType: "module"</code>- ESM (import/export) 방식
          <br />
          <code>console: "readonly"</code>- console은 전역 읽기전용으로 인식
        </p>
        <p>
          <code>linterOptions</code>
          <br />
          <code>reportUnusedDisableDirectives</code> -{" "}
          <code>// eslint-disable</code> 주석을 달았는데 실제로 억제되는 규칙이
          없으면 에러로 처리합니다. 불필요한 disable 주석을 방지합니다.
        </p>
        <p>
          <code>rules</code>
          <br />
          <code>no-unused-vars</code> - 선언 후 사용하지 않는 변수 금지
          <br />
          <code>no-undef</code> - 선언되지 않은 변수 사용 금지
          <br />
          <code>eqeqeq</code> - == 대신 === 강제
          <br />
          <code>prefer-const</code> - 재할당 없는 변수는 const 권장
          <br />
          <code>no-console</code> - console.log 사용 허용
        </p>

        <h2>구성</h2>
        <p>
          과거엔 <code>.eslintrc.js</code>, <code>.eslintrc.json</code>과 같은
          eslintrc 방식이 많이 사용되었습니다. 하지만 현재 공식문서의 중심은
          Flat Config 방식을 권장하고 있습니다. 그래서 만약 새로운 프로젝트를
          시작한다면 <code>eslint.config.js</code>방식을 사용하는 것이 좋습니다.
        </p>

        <h2>형태</h2>
        <p>
          <code>eslint.config.js</code>의 형태에서 핵심 키
        </p>
        <ul className="">
          <li>
            <code>files</code>
          </li>
          <li>
            <code>ignores</code>
          </li>
          <li>
            <code>languageOptions</code>
          </li>
          <li>
            <code>plugins</code>
          </li>
          <li>
            <code>rules</code>
          </li>
          <li>
            <code>extends</code>
          </li>
          <li>
            <code>linterOptions</code>
          </li>
        </ul>
        <p>
          ESLint 설정에서 중심이 되는 주요 키입니다.
          <br />
          자세한 내용은 <NavLink to="/Configuration">설정 파일</NavLink>을 참고
        </p>

        <h2>자주 사용되는 공유 설정과 플러그인</h2>
        <ul className="no-bullet">
          <li>
            <a href="https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb">
              eslint-config-airbnb
            </a>
            <p>
              - Airbnb JavaScript 스타일 가이드를 기반으로 한 공유 ESLint
              설정입니다.
            </p>
          </li>
          <li>
            <a href="https://github.com/typescript-eslint/typescript-eslint">
              typescript-eslint
            </a>
            <p>
              - TypeScript 코드를 ESLint로 분석할 수 있도록 parser, plugin,
              preset을 제공합니다.
            </p>
          </li>
          <li>
            <a href="https://github.com/jsx-eslint/eslint-plugin-react">
              eslint-plugin-react
            </a>{" "}
            <p>- React 및 JSX를 위한 ESLint 규칙을 제공합니다.</p>
          </li>
        </ul>

        <nav className="doc-nav">
          <NavLink to="/" className="doc-nav-btn">
            ← 홈으로
          </NavLink>
          <NavLink to="/rules" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
