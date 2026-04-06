import { NavLink } from "react-router-dom";
import CodeBlock from "../components/ui/CodeBlock";
import CopyableCodeBlock from "../components/ui/CopyableCodeBlock";

const eslintconfigjsExample = `import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
	},
]);
`;

export default function Install() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>시작하기</span>
        <span className="breadcrumb-sep">›</span>
        <span>설치하기</span>
      </nav>

      <div className="page-header">
        <h1>설치하기</h1>
        <p className="page-summary">
          <a
            href="https://nodejs.org/ko"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint를 사용하려면 Node.js
          </a>{" "}
          20.19.0 이상(또는 22.13.0 이상, 24 이상)의 SSL 지원 기능이 포함된
          버전으로 설치되어 있어야합니다.
          <br />
          ESLint의 TypeScript 타입 정의를 사용하려면 TypeScript 5.3 이상 버전이
          필요합니다.
        </p>
      </div>

      <article className="article">
        <h2>빠른 시작</h2>
        <p>
          다음 명령어를 사용하면 ESLint를 설치하고 기본 설정을 자동으로 구성할
          수 있습니다.
        </p>

        <CodeBlock
          commands={{
            npm: "npm init @eslint/config@latest",
            yarn: "yarn create @eslint/config",
            pnpm: "pnpm create @eslint/config@latest",
            bun: "bun create @eslint/config@latest",
          }}
        />

        <p>
          위 명령어를 실행하면 프로젝트에 맞는 설정을 선택하면서 ESLint가
          자동으로 구성됩니다.
        </p>

        <p>
          ESLint는 package.json 기반으로 동작합니다.
          <br />
          프로젝트가 없다면 먼저 package.json을 생성합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">npm</span>
          </div>
          <pre>
            <code>npm init -y</code>
          </pre>
        </div>

        <p>
          그 후에는 다음 명령어로 특정 파일이나 디렉터리에 대해 ESLint를 실행할
          수 있습니다.
        </p>

        <CodeBlock
          commands={{
            npm: "npx eslint yourfile.js",
            yarn: "yarn dlx eslint yourfile.js",
            pnpm: "pnpm dlx eslint yourfile.js",
            bun: "bunx eslint yourfile.js",
          }}
        />

        <p>
          전체 프로젝트를 대상으로 ESLint를 실행하려면 다음 명령어를 사용할 수
          있습니다.
        </p>

        <CodeBlock
          commands={{
            npm: "npx eslint .",
            yarn: "yarn dlx eslint .",
            pnpm: "pnpm dlx eslint .",
            bun: "bunx eslint .",
          }}
        />

        <h2>전역 설치</h2>
        <p>
          ESLint를 로컬 설치가 아닌 전역으로 설치하는 것도 가능합니다.
          <br />
          <code>npm install eslint --global</code>
          <br />
          하지만 이는 권장되지 않으며, ESLint를 전역으로 설치하더라도 사용하는
          플러그인이나 공유 가능한 설정파일은 로컬에 설치해야만 합니다.
        </p>

        <h2>수동 설정</h2>
        <p>프로젝트에서 ESLint를 수동으로 설정할 수 있습니다.</p>
        <div className="docs-notice">
          <strong>⚠️ pnpm 사용 시 주의사항</strong>

          <p>
            pnpm을 사용하는 경우, 의존성 설치 방식 차이로 인해 ESLint와 같은
            일부 도구에서 예상치 못한 문제가 발생할 수 있습니다.
          </p>

          <p>
            이를 방지하기 위해 프로젝트 루트에 <code>.npmrc</code> 파일을
            생성하고, 다음 설정을 추가하는 것을 권장합니다.
          </p>

          <pre className="code-block">
            <code>{`auto-install-peers=true
node-linker=hoisted`}</code>
          </pre>

          <p>
            위 설정을 적용하면 pnpm이 npm과 보다 유사한 방식으로 의존성을
            설치하게 되어, 플러그인 및 공유 설정을 사용하는 과정에서 발생할 수
            있는 호환성 문제를 줄일 수 있습니다.
          </p>
        </div>

        <p>
          시작하기 전에 package.json 파일이 프로젝트에 존재해야 합니다. 파일이
          없다면 <code>npm init</code> 또는 <code>yarn init</code> 등 관련
          명령어를 통해 생성합니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>1. 프로젝트에 ESLint 패키지 설치</h3>
            <CodeBlock
              commands={{
                npm: "npm install --save-dev eslint@latest @eslint/js@latest",
                yarn: "yarn add --dev eslint@latest @eslint/js@latest",
                pnpm: "pnpm add --save-dev eslint@latest @eslint/js@latest",
                bun: "bun add --dev eslint@latest @eslint/js@latest",
              }}
            />
          </li>
          <li>
            <h3>2. eslint.config.js 파일 추가</h3>
            eslint.config.js 파일을 프로젝트 루트에 생성합니다.
            <pre className="code-block">
              <code>{`# 터미널에서 생성
touch eslint.config.js`}</code>
            </pre>
          </li>
          <li>
            <h3>3. 파일 설정 추가</h3>
            <p>
              규칙, 사용자 설정, 플러그인 등을 추가하는 방법은{" "}
              <NavLink to={"/"}>ESLint 설정 문서</NavLink>를 참조해주세요.
            </p>
            <CopyableCodeBlock lang="JavaScript" code={eslintconfigjsExample}>
              <span className="tk-kw-import">import</span> {"{ "}
              <span className="tk-fn">defineConfig</span>
              {" } "}
              <span className="tk-kw-import">from</span>{" "}
              <span className="tk-str">"eslint/config"</span>
              {";"}
              {"\n"}
              <span className="tk-kw-import">import</span>{" "}
              <span className="tk-key">js</span>{" "}
              <span className="tk-kw-import">from</span>{" "}
              <span className="tk-str">"@eslint/js"</span>
              {";"}
              {"\n\n"}
              <span className="tk-kw">export</span>{" "}
              <span className="tk-kw">default</span>{" "}
              <span className="tk-fn">defineConfig</span>
              {"(["}
              {"\n"}
              {"  {"}
              {"\n"}
              {"    "}
              <span className="tk-prop">files</span>
              {": ["}
              <span className="tk-str">"**/*.js"</span>
              {"],"}
              {"\n"}
              {"    "}
              <span className="tk-prop">plugins</span>
              {": {"}
              {"\n"}
              {"      "}
              <span className="tk-key">js</span>
              {","}
              {"\n"}
              {"    },"}
              {"\n"}
              {"    "}
              <span className="tk-prop">extends</span>
              {": ["}
              <span className="tk-str">"js/recommended"</span>
              {"],"}
              {"\n"}
              {"    "}
              <span className="tk-prop">rules</span>
              {": {"}
              {"\n"}
              {"      "}
              <span className="tk-str">"no-unused-vars"</span>
              {": "}
              <span className="tk-str">"warn"</span>
              {","}
              {"\n"}
              {"      "}
              <span className="tk-str">"no-undef"</span>
              {": "}
              <span className="tk-str">"warn"</span>
              {","}
              {"\n"}
              {"    },"}
              {"\n"}
              {"  },"}
              {"\n"}
              {"]);"}
            </CopyableCodeBlock>
          </li>
          <li>
            <h3>4. ESLint CLI를 사용하여 검사</h3>
            <CodeBlock
              commands={{
                npm: "npx eslint project-dir/ file.js",
                yarn: "yarn dlx eslint project-dir/ file.js",
                pnpm: "pnpm dlx eslint project-dir/ file.js",
                bun: "bunx eslint project-dir/ file.js",
              }}
            />
          </li>
        </ul>

        <nav className="doc-nav">
          <NavLink to="/intro" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/setting" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
