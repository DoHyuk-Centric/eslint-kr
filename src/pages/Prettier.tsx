import { NavLink } from "react-router-dom";

export default function Prettier() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <span>Prettier와 함께 쓰기</span>
      </nav>

      <div className="page-header">
        <h1>Prettier와 함께 쓰기</h1>
        <p>
          ESLint와 Prettier는 각자 다른 역할을 담당합니다. 둘을 함께 사용하면{" "}
          <strong>코드 품질</strong>과 <strong>코드 스타일</strong>을 동시에
          관리할 수 있습니다.
        </p>
      </div>

      <article className="article">
        <h2>ESLint vs Prettier — 역할 구분</h2>
        <p>
          두 도구는 목적이 다르기 때문에 충돌 없이 함께 사용할 수 있습니다.
          역할을 명확히 구분하는 것이 핵심입니다.
        </p>
        <ul>
          <li>
            <strong>ESLint</strong> — 코드 품질 검사. 잠재적 버그, 안티패턴,
            사용되지 않는 변수 등 논리적 문제를 잡아냅니다.
          </li>
          <li>
            <strong>Prettier</strong> — 코드 포맷터. 들여쓰기, 따옴표, 세미콜론
            등 스타일을 자동으로 통일합니다.
          </li>
        </ul>
        <p>
          문제는 ESLint에도 <code>indent</code>, <code>quotes</code>,{" "}
          <code>semi</code> 같은 스타일 규칙이 있어, 그대로 두면 Prettier와
          충돌이 발생한다는 점입니다. 이 충돌을 해결하는 방법이 두 가지
          있습니다.
        </p>

        <nav aria-label="목차">
          <ul className="no-bullet">
            <li>
              <a href="#install">패키지 설치</a>
            </li>
            <li>
              <a href="#config-prettier">eslint-config-prettier</a>
            </li>
            <li>
              <a href="#plugin-prettier">eslint-plugin-prettier</a>
            </li>
            <li>
              <a href="#recommended">권장 설정 조합</a>
            </li>
            <li>
              <a href="#prettier-config">Prettier 설정</a>
            </li>
            <li>
              <a href="#scripts">스크립트 구성</a>
            </li>
          </ul>
        </nav>

        {/* ───────────── 패키지 설치 ───────────── */}
        <h2 id="install">패키지 설치</h2>
        <p>
          Prettier와 함께 ESLint를 사용하려면 두 가지 패키지를 추가로
          설치합니다.
        </p>

        <div className="code-block">
          <pre>
            <code>{`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`}</code>
          </pre>
        </div>

        <ul>
          <li>
            <code>prettier</code> — Prettier 본체
          </li>
          <li>
            <code>eslint-config-prettier</code> — Prettier와 충돌하는 ESLint
            스타일 규칙을 비활성화
          </li>
          <li>
            <code>eslint-plugin-prettier</code> — Prettier를 ESLint 규칙으로
            실행해, 포맷 오류를 ESLint 오류로 표시
          </li>
        </ul>

        {/* ───────────── eslint-config-prettier ───────────── */}
        <h2 id="config-prettier">eslint-config-prettier</h2>
        <p>
          <code>eslint-config-prettier</code>는 ESLint의 스타일 관련 규칙 중
          Prettier와 충돌하는 것들을 일괄 비활성화합니다. 포맷팅은 Prettier에게
          완전히 맡기고, ESLint는 코드 품질 검사에만 집중하는 방식입니다.
        </p>
        <p>
          가장 단순하고 권장되는 접근법입니다. ESLint가 포맷 오류를 별도로
          보고하지 않으며, 포맷은 저장 시 Prettier가 자동으로 처리합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    rules: {
      // 코드 품질 규칙
      "no-undef": "error",
      "no-unused-vars": "warn",
      "prefer-const": "error",

      // 스타일 규칙 — Prettier와 충돌 가능
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
  },
  // 마지막에 추가해 스타일 규칙을 덮어씀
  eslintConfigPrettier,
];`}</code>
          </pre>
        </div>

        <p>
          <code>eslintConfigPrettier</code>는 배열의 <strong>마지막</strong>에
          위치해야 합니다. 앞서 정의된 스타일 규칙들을 덮어써서 비활성화하는
          방식이기 때문입니다.
        </p>

        {/* ───────────── eslint-plugin-prettier ───────────── */}
        <h2 id="plugin-prettier">eslint-plugin-prettier</h2>
        <p>
          <code>eslint-plugin-prettier</code>는 Prettier를 ESLint 규칙으로
          실행합니다. Prettier 포맷과 다른 코드가 있으면 ESLint 오류로
          보고됩니다. ESLint 하나로 품질 검사와 포맷 검사를 모두 처리하고 싶을
          때 사용합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js
import pluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error", // Prettier 포맷 위반을 ESLint 오류로 표시
    },
  },
  eslintConfigPrettier,
];`}</code>
          </pre>
        </div>

        <p>
          이 방식에서는 포맷이 맞지 않으면 ESLint가 직접 오류를 표시합니다.
          단점은 Prettier 실행이 느려 lint 속도에 영향을 줄 수 있다는 점입니다.
          CI 파이프라인에서 포맷까지 강제하고 싶을 때 유용합니다.
        </p>

        {/* ───────────── 권장 설정 조합 ───────────── */}
        <h2 id="recommended">권장 설정 조합</h2>
        <p>
          대부분의 프로젝트에서는 <code>eslint-config-prettier</code>만 사용하는
          방식을 권장합니다. 에디터에서 Prettier가 저장 시 자동 포맷을 처리하고,
          ESLint는 코드 품질에만 집중하는 역할 분담이 가장 깔끔합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js — 권장 조합
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    rules: {
      // 오류 방지
      "no-undef": "error",
      "no-unused-vars": "warn",
      "no-unreachable": "error",

      // 모범 사례
      "eqeqeq": "error",
      "no-var": "error",
      "no-console": "warn",

      // ES6+
      "prefer-const": "error",
      "prefer-template": "warn",
      "no-duplicate-imports": "error",

      // 스타일 규칙은 따로 정의하지 않음
      // → Prettier가 전담
    },
  },
  eslintConfigPrettier, // 충돌 방지용 — 항상 마지막에
];`}</code>
          </pre>
        </div>

        {/* ───────────── Prettier 설정 ───────────── */}
        <h2 id="prettier-config">Prettier 설정</h2>
        <p>
          프로젝트 루트에 <code>.prettierrc</code> 파일을 만들어 팀의 포맷 규칙을
          정의합니다. ESLint 설정과 별개로 관리합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JSON</span>
          </div>
          <pre>
            <code>{`// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}`}</code>
          </pre>
        </div>

        <p>
          Prettier 무시 파일도 따로 관리합니다. 빌드 산출물이나 자동 생성 파일은
          포맷 대상에서 제외합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">plaintext</span>
          </div>
          <pre>
            <code>{`# .prettierignore
dist
build
node_modules
*.min.js`}</code>
          </pre>
        </div>

        {/* ───────────── 스크립트 구성 ───────────── */}
        <h2 id="scripts">스크립트 구성</h2>
        <p>
          <code>package.json</code>에 ESLint와 Prettier를 각각 실행하는
          스크립트를 분리해두면 편리합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JSON</span>
          </div>
          <pre>
            <code>{`// package.json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}`}</code>
          </pre>
        </div>

        <ul>
          <li>
            <code>lint</code> — ESLint로 코드 품질 검사
          </li>
          <li>
            <code>lint:fix</code> — ESLint 자동 수정 가능한 오류 수정
          </li>
          <li>
            <code>format</code> — Prettier로 전체 포맷 적용
          </li>
          <li>
            <code>format:check</code> — CI에서 포맷이 맞는지 검사 (수정 없이)
          </li>
        </ul>

        <h2>정리</h2>
        <p>
          ESLint와 Prettier를 함께 사용할 때 핵심은 역할 분담입니다. ESLint는
          코드 품질과 잠재적 버그를, Prettier는 포맷을 전담하도록 구성합니다.
        </p>
        <p>
          충돌을 방지하려면 <code>eslint-config-prettier</code>를 ESLint 설정
          마지막에 추가하는 것으로 충분합니다. ESLint 오류로 포맷까지 관리하고
          싶다면 <code>eslint-plugin-prettier</code>를 추가로 사용합니다.
        </p>

        <p>
          더 자세한 내용은{" "}
          <a
            href="https://prettier.io/docs/en/integrating-with-linters.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prettier 공식 문서 — Integrating with Linters
          </a>
          에서 확인하실 수 있습니다.
        </p>

        <nav className="doc-nav">
          <NavLink to="/plugin" className="doc-nav-btn">
            ← 이전
          </NavLink>
        </nav>
      </article>
    </div>
  );
}