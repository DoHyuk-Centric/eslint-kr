import { NavLink } from "react-router-dom";

export default function SettingFile() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <span>설정 파일</span>
      </nav>

      <div className="page-header">
        <h1>설정 파일 (Configuration)</h1>
      </div>

      <article className="article">
        <h2>파일 형식</h2>
        <ul>
          <li>Flat Config</li>
          <li>Legacy Config</li>
        </ul>
        <p>ESLint v9을 기점으로 설정 방식이 크게 바뀌었습니다.</p>

        <table>
          <caption>Flat Config vs Legacy Config 비교</caption>
          <thead>
            <tr>
              <th>구분</th>
              <th>Flat Config</th>
              <th>Legacy Config</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>파일명</td>
              <td>
                <code>eslint.config.js</code>
              </td>
              <td>
                <code>.eslintrc.*</code>
              </td>
            </tr>
            <tr>
              <td>지원 버전</td>
              <td>v8.21+ (기본값 v9+)</td>
              <td>v9 미만</td>
            </tr>
            <tr>
              <td>형식</td>
              <td>JS 배열 구조</td>
              <td>객체 구조</td>
            </tr>
            <tr>
              <td>상태</td>
              <td>현재 표준</td>
              <td>Deprecated</td>
            </tr>
          </tbody>
        </table>

        <h2>Flat Config 방식</h2>
        <p>
          현재는 Flat Config 방식을 공식적으로 권장하고 있습니다.{" "}
          <code>eslint.config.js</code> 하나의 파일로 모든 설정을 관리합니다.
        </p>
        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
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
          <strong>Flat Config</strong>의 핵심 특징
        </p>
        <ul>
          <li>
            <p>
              <strong>배열 구조</strong>: 위에서 아래로 순서대로 적용, 뒤에 오는
              설정이 앞을 덮어씀
            </p>
          </li>
          <li>
            <p>
              <strong>
                <code>files</code> 필드
              </strong>
              : 어떤 파일에 적용할지 직접 지정(glob 패턴)
            </p>
          </li>
          <li>
            <p>
              <strong>명시적 import</strong>: 플러그인을 직접 import해서 사용
            </p>
          </li>
        </ul>

        <p>Legacy Config 방식은 더이상 지원하지 않으므로 생략</p>

        <h2>핵심 필드</h2>
        <ul className="no-bullet">
          <li>
            <a href="#env">env (환경 정의)</a>
          </li>
          <li>
            <a href="#extends">extends (규칙 세트 상속)</a>
          </li>
          <li>
            <a href="#parserOptions">parserOptions (문법 설정)</a>
          </li>
          <li>
            <a href="#rules">rules (규칙)</a>
          </li>
          <li>
            <a href="#plugin">plugin (플러그인)</a>
          </li>
          <li>
            <a href="#overrides">overrides</a>
          </li>
        </ul>

        <h2 id="env">env (환경 정의)</h2>
        <p>실행 환경 정의 (Global Scope 제어)</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>
              {`env: {
  browser: true, // window, document 사용을 허용합니다.
  node: true, // require, module 사용을 허용합니다.
  es2021: true, // 최신 문법을 허용합니다.
}`}
            </code>
          </pre>
        </div>
        <p>역할은 전역 변수를 허용할지 결정합니다.</p>
        <p>
          예를들어 <code>console.log(window)</code>와 같은 코드는{" "}
          <code>browser: true</code>가 아니라면{" "}
          <code>window is not defined</code>와 같은 오류가 발생하게 됩니다.
        </p>
        <p>
          ESLint는 코드 실행을 하지 않고, 대신 정적 분석으로 검사를 실시합니다.
          때문에, env에 위 코드와 같은 내용들을 명시해줘야합니다.
        </p>

        <h2 id="extends">extends (규칙 세트 상속)</h2>
        <p>미리 정의된 규칙(rule set)을 가져와 현재 설정에 병합합니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`extends: ["eslint:recommended"]`}</code>
          </pre>
        </div>

        <p>
          내부적으로는{" "}
          <code>extends → rule preset merge → 최종 rules 생성</code> 순서로
          동작합니다.
        </p>

        <p>
          <code>eslint:recommended</code>는 ESLint에서 공식적으로 권장하는 규칙
          모음으로, 기본적인 오류 방지 규칙들이 포함되어 있습니다.
        </p>

        <p>
          여러 개의 preset을 동시에 사용할 수도 있으며, 뒤에 선언된 설정이 앞의
          설정을 덮어씁니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`extends: [
  "eslint:recommended",
  "plugin:react/recommended"
]`}</code>
          </pre>
        </div>

        <p>
          또한 <code>rules</code> 필드는 <code>extends</code>로 가져온 설정을
          최종적으로 덮어씁니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`extends: ["eslint:recommended"],
rules: {
  semi: "off"
}`}</code>
          </pre>
        </div>

        <p>
          위 예제에서는 <code>eslint:recommended</code>에서 설정한{" "}
          <code>semi</code> 규칙이 무시되고, 최종적으로 <code>off</code>가
          적용됩니다.
        </p>

        <h2 id="parserOptions">parserOptions (문법 설정)</h2>
        <p>ESLint가 코드를 어떤 문법 기준으로 해석할지 설정합니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
}`}</code>
          </pre>
        </div>

        <p>
          <code>ecmaVersion</code>은 사용할 JavaScript 문법 버전을 의미하며,
          <code>latest</code>를 사용하면 최신 문법을 사용할 수 있습니다.
        </p>

        <p>
          <code>sourceType</code>은 모듈 시스템을 의미하며,
          <code>module</code>로 설정하면 <code>import / export</code> 문법을
          사용할 수 있습니다.
        </p>

        <p>이 설정이 없으면 최신 문법에서 오류가 발생할 수 있습니다.</p>

        <p>
          예를 들어 <code>import</code>를 사용했을 때{" "}
          <code>'import' is reserved</code> 오류가 발생할 수 있습니다.
        </p>

        <p>
          parserOptions는 ESLint가 코드를 "어떻게 이해할지"를 결정하는
          설정입니다.
        </p>

        <h2 id="rules">rules (규칙)</h2>
        <p>ESLint의 핵심 설정으로, 코드 검사 규칙을 정의합니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`rules: {
  semi: ["error", "always"],
  "no-unused-vars": "warn",
}`}</code>
          </pre>
        </div>

        <p>
          각 규칙은 <code>off</code>, <code>warn</code>, <code>error</code>로
          설정할 수 있습니다.
        </p>

        <ul>
          <li>
            <code>off</code> : 규칙 비활성화
          </li>
          <li>
            <code>warn</code> : 경고 표시
          </li>
          <li>
            <code>error</code> : 에러 발생
          </li>
        </ul>

        <p>배열 형태로 옵션을 추가하여 세부 설정도 가능합니다.</p>

        <p>
          예를 들어 <code>semi</code>는 세미콜론 사용을 강제하는 규칙입니다.
        </p>

        <p>
          rules는 extends로 가져온 설정을 최종적으로 덮어쓰는 역할을 합니다.
        </p>

        <p>즉, ESLint에서 실제 동작을 결정하는 가장 중요한 설정입니다.</p>
        <NavLink to="/rules">자세한 내용</NavLink>

        <h2 id="plugin">plugin (플러그인)</h2>
        <p>ESLint의 기능을 확장하여 추가적인 규칙을 사용할 수 있게 합니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`plugins: ["react"]`}</code>
          </pre>
        </div>

        <p>
          플러그인은 기본 ESLint에서 지원하지 않는 규칙들을 추가로 제공합니다.
        </p>

        <p>
          예를 들어 React 프로젝트에서는 JSX 관련 규칙을 검사하기 위해
          플러그인을 사용합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`extends: ["plugin:react/recommended"]`}</code>
          </pre>
        </div>

        <p>
          플러그인은 단독으로 사용하기보다 extends와 함께 사용하는 경우가
          많습니다.
        </p>

        <p>
          <code>plugin</code>은 "규칙을 제공하는 역할", <code>extends</code>는
          "규칙을 묶어서 적용하는 역할"이라고 이해하면 됩니다.
        </p>

        <h2 id="overrides">overrides (조건부 규칙 적용)</h2>
        <p>특정 파일이나 패턴에 대해 다른 ESLint 설정을 적용할 수 있습니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`overrides: [
  {
    files: ["*.test.js"],
    rules: {
      "no-unused-expressions": "off",
    },
  },
]`}</code>
          </pre>
        </div>

        <p>위 설정은 테스트 파일에만 특정 규칙을 비활성화하는 예시입니다.</p>

        <p>
          파일 패턴에 따라 다른 규칙을 적용할 수 있기 때문에 테스트 코드, 설정
          파일 등에 유용하게 사용할 수 있습니다.
        </p>

        <p>예를 들어 설정 파일에서는 Node 환경을 따로 지정할 수도 있습니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`overrides: [
  {
    files: ["*.config.js"],
    env: { node: true },
  },
]`}</code>
          </pre>
        </div>

        <p>
          overrides는 프로젝트 내에서 "예외적인 규칙"을 처리하는 역할을 합니다.
        </p>

        <h2>정리</h2>
        <p>
          ESLint 설정은 단순한 규칙 정의가 아니라, 프로젝트의 코드 품질과 개발
          기준을 정의하는 역할을 합니다. 더 자세한 내용은{" "}
          <a
            href="https://eslint.org/docs/latest/use/configure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 홈페이지
          </a>
          에서 확인하실 수 있습니다.
        </p>

        <nav className="doc-nav">
          <NavLink to="/rules" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/parser" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
