import { NavLink } from "react-router-dom";

export default function SettingFile() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <span>파서 (Parser)</span>
      </nav>

      <div className="page-header">
        <h1>파서 (Parser)</h1>
      </div>
      <p>
        ESLint는 JavaScript 코드를 분석하기 위해 <strong>파서(Parser)</strong>를
        사용합니다. 파서는 소스 코드를 읽어{" "}
        <strong>AST(Abstract Syntax Tree, 추상 구문 트리)</strong>로 변환하는
        역할을 하며, ESLint는 이 <strong>AST</strong>를 기반으로 린트 규칙을
        적용합니다.
      </p>

      <article className="article">
        <h2>기본 파서</h2>
        <p>ESLint의 기본 파서는 ESpree입니다.</p>

        <ul>
          <li>Esprima를 기반으로 만들어진 ESLint 공식 파서</li>
          <li>
            표준{" "}
            <a
              href="https://ecma-international.org/publications-and-standards/standards/ecma-262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript(ECMAScript)
            </a>{" "}
            문법을 지원
          </li>
          <li>
            <code>ecmaVersion</code>, <code>sourceType</code> 등의 옵션으로 문법
            버전 설정 가능
          </li>
        </ul>

        {/* 안내 */}
        <div className="docs-notice">
          ⚠️ 설정 파일(.eslint)에서 parser 옵션을 지정하지 않으면 자동으로
          Espree가 사용됩니다.
        </div>

        <h2>토큰화 (Tokenization)</h2>
        <p>
          파서는 코드를 바로 AST로 변환하지 않고, 먼저{" "}
          <strong>토큰(Token)</strong> 단위로 분해합니다.
        </p>

        <p>토큰은 코드의 가장 작은 의미 단위이며, 예를 들어 다음 코드:</p>

        <div className="code-block">
          <pre>
            <code>{`const a = 10;`}</code>
          </pre>
        </div>

        <p>는 다음과 같이 토큰으로 나뉩니다:</p>

        <ul>
          <li>
            <code>const</code> → 키워드
          </li>
          <li>
            <code>a</code> → 식별자
          </li>
          <li>
            <code>=</code> → 연산자
          </li>
          <li>
            <code>10</code> → 숫자 리터럴
          </li>
          <li>
            <code>;</code> → 구문 종료
          </li>
        </ul>

        <p>
          이 과정을 <strong>Lexical Analysis (어휘 분석)</strong>이라고 합니다.
        </p>

        <h2>파싱 (Parsing)</h2>
        <p>
          토큰화된 결과를 기반으로 파서는 코드의 구조를 분석하여{" "}
          <strong>AST(Abstract Syntax Tree)</strong>를 생성합니다.
        </p>

        <p>예를 들어 다음 코드:</p>

        <div className="code-block">
          <pre>
            <code>{`const a = 1 + 2;`}</code>
          </pre>
        </div>

        <p>는 내부적으로 다음과 같은 트리 구조로 변환됩니다:</p>

        <div className="code-block">
          <pre>
            <code>{`VariableDeclaration
 ├─ Identifier (a)
 └─ BinaryExpression (+)
     ├─ Literal (1)
     └─ Literal (2)`}</code>
          </pre>
        </div>

        <p>
          즉, 단순 문자열이었던 코드가 <strong>구조적인 데이터</strong>로
          변환됩니다.
        </p>

        <h2>ESLint 동작 흐름</h2>

        <p>ESLint는 다음과 같은 과정으로 코드를 분석합니다:</p>

        <div className="code-block">
          <pre>
            <code>{`소스 코드
   ↓
Espree (파서)
   ↓
AST 생성
   ↓
Rule (규칙 검사)
   ↓
경고 / 에러 출력`}</code>
          </pre>
        </div>

        <p>
          ESLint는 코드를 직접 해석하지 않고{" "}
          <strong>AST를 기반으로 규칙을 검사</strong>합니다.
        </p>

        <h2>parser 옵션</h2>

        <p>
          ESLint에서는 <code>parser</code> 옵션을 통해 사용할 파서를 지정할 수
          있습니다.
        </p>

        <div className="code-block">
          <pre>
            <code>{`export default {
  parser: "espree"
}`}</code>
          </pre>
        </div>

        <p>주요 옵션:</p>

        <ul>
          <li>
            <code>ecmaVersion</code> → 사용할 ECMAScript 버전
          </li>
          <li>
            <code>sourceType</code> → <code>"script"</code> 또는{" "}
            <code>"module"</code>
          </li>
        </ul>

        <div className="code-block">
          <pre>
            <code>{`export default {
  parserOptions: {
    ecmaVersion: 2024,
    sourceType: "module"
  }
}`}</code>
          </pre>
        </div>

        <h2>커스텀 파서 (Custom Parser)</h2>

        <p>
          기본적으로 ESLint는 <strong>Espree</strong>를 사용하지만, 모든
          JavaScript 문법을 지원하는 것은 아닙니다.
        </p>

        <p>
          특히 다음과 같은 경우에는 <strong>커스텀 파서</strong>가 필요합니다:
        </p>

        <ul>
          <li>TypeScript를 사용하는 경우</li>
          <li>실험적인 최신 문법 (Stage proposal)</li>
          <li>JSX / React 문법</li>
        </ul>

        <p>이런 경우 ESLint 기본 파서 대신 다른 파서를 지정할 수 있습니다.</p>

        <h3>대표적인 파서</h3>

        <ul>
          <li>
            <code>@typescript-eslint/parser</code> → TypeScript 지원
          </li>
          <li>
            <code>@babel/eslint-parser</code> → Babel 기반 최신 문법 지원
          </li>
          <li>
            <code>@vue-eslint-parser</code> → <code>.vue</code> 파일의 <code>template</code> 블록을 파싱합니다.
          </li>
        </ul>

        <nav className="doc-nav">
          <NavLink to="/settingFile" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/plugin" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
