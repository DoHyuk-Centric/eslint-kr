import { NavLink } from "react-router-dom";

export default function Plugin() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <span>플러그인 (Plugin)</span>
      </nav>

      <div className="page-header">
        <h1>플러그인 (Plugin)</h1>
      </div>

      <article className="article">
        <h2>플러그인이란?</h2>
        <p>
          ESLint 플러그인은 ESLint의 기능을 확장하는 npm 패키지입니다.
          플러그인은 보통 <strong>커스텀 규칙(rules)</strong>,
          <strong> 설정(configs)</strong>, <strong>프로세서(processors)</strong>
          를 묶어서 제공합니다.
        </p>

        <p>
          특정 프레임워크나 라이브러리에 맞는 린팅 규칙을 제공하거나, 여러
          프로젝트에서 재사용 가능한 규칙 세트를 배포할 때 사용합니다.
        </p>

        <p>
          패키지 이름은 보통 <code>eslint-plugin-이름</code> 또는{" "}
          <code>@scope/eslint-plugin-이름</code> 형태를 따릅니다.
        </p>

        <h2>플러그인 기본 구조</h2>
        <p>
          플러그인은 기본적으로 하나의 JavaScript 객체이며, 보통 다음과 같은
          구조를 가집니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`const plugin = {
  meta: {},
  configs: {},
  rules: {},
  processors: {},
};

export default plugin;
// 또는
module.exports = plugin;`}</code>
          </pre>
        </div>

        <p>
          npm 패키지로 배포할 계획이라면, 플러그인 객체를 내보내는 모듈이
          패키지의 기본 export가 되도록 구성해야 합니다. 그래야 ESLint가 CLI의{" "}
          <code>--plugin</code> 옵션으로 플러그인을 가져올 수 있습니다.
        </p>

        <NavLink to="/PluginDistribution">ESLint Plugin 배포 가이드</NavLink>

        <h2>핵심 필드</h2>
        <nav aria-label="목차">
          <ul className="no-bullet">
            <li>
              <a href="#meta">meta</a>
            </li>
            <li>
              <a href="#rules">rules</a>
            </li>
            <li>
              <a href="#processors">processors</a>
            </li>
            <li>
              <a href="#configs">configs</a>
            </li>
            <li>
              <a href="#legacy">레거시 설정 호환</a>
            </li>
            <li>
              <a href="#testing">테스트와 린팅</a>
            </li>
          </ul>
        </nav>

        <h2 id="meta">meta</h2>
        <p>
          <code>meta</code>는 플러그인 자체의 메타데이터를 담는 필드입니다.
          <code>name</code>, <code>version</code>, <code>namespace</code>를 루트{" "}
          <code>meta</code>에 제공하는 것을 권장합니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3",
    namespace: "example",
  },
  rules: {},
};

export default plugin;`}</code>
          </pre>
        </div>

        <ul>
          <li>
            <code>meta.name</code> : npm 패키지 이름
          </li>
          <li>
            <code>meta.version</code> : 플러그인 버전
          </li>
          <li>
            <code>meta.namespace</code> : 규칙, 프로세서, 설정에 접근할 때
            사용할 네임스페이스
          </li>
        </ul>

        <p>
          예를 들어 패키지 이름이 <code>eslint-plugin-example</code>이라면,
          namespace는 보통 <code>example</code>이 됩니다.
        </p>

        <h2 id="rules">rules</h2>
        <p>
          <code>rules</code>는 플러그인이 제공하는 커스텀 규칙을 담는
          객체입니다. key는 규칙 이름, value는 규칙 구현 객체입니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3",
  },
  rules: {
    "dollar-sign": {
      create(context) {
        return {
          Identifier(node) {
            if (node.name.includes("$")) {
              context.report({
                node,
                message: "식별자에 $ 문자를 사용할 수 없습니다.",
              });
            }
          },
        };
      },
    },
  },
};

export default plugin;`}</code>
          </pre>
        </div>

        <p>
          규칙 ID에는 <code>/</code> 문자가 들어가면 안 됩니다. 실제 설정
          파일에서는 플러그인 네임스페이스를 붙여{" "}
          <code>example/dollar-sign</code>처럼 사용합니다.
        </p>

        <p>flat config에서 플러그인 규칙을 사용하는 예시는 다음과 같습니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js
import { defineConfig } from "eslint/config";
import example from "eslint-plugin-example";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      example,
    },
    rules: {
      "example/dollar-sign": "error",
    },
  },
]);`}</code>
          </pre>
        </div>

        <h2 id="processors">processors</h2>
        <p>
          <code>processors</code>는 ESLint가 바로 처리하기 어려운 파일을
          전처리(preprocess) / 후처리(postprocess)할 때 사용합니다.
        </p>

        <p>
          예를 들어 Markdown, 텍스트, 템플릿 파일 내부의 코드를 분리해서 lint할
          때 사용할 수 있습니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3",
  },
  processors: {
    "processor-name": {
      preprocess(text, filename) {
        return [text];
      },
      postprocess(messages, filename) {
        return messages.flat();
      },
    },
  },
};

export default plugin;`}</code>
          </pre>
        </div>

        <p>설정 파일에서는 다음과 같이 processor를 연결합니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js
import { defineConfig } from "eslint/config";
import example from "eslint-plugin-example";

export default defineConfig([
  {
    files: ["**/*.txt"],
    plugins: {
      example,
    },
    processor: "example/processor-name",
  },
]);`}</code>
          </pre>
        </div>

        <h2 id="configs">configs</h2>
        <p>
          <code>configs</code>는 플러그인 안에 미리 정의한 설정 묶음을 제공하는
          필드입니다. 여러 규칙을 하나의 preset처럼 배포할 수 있습니다.
        </p>

        <p>
          보통 <code>recommended</code> 같은 이름으로 자주 제공하며, 사용자는
          규칙을 하나씩 켜지 않고 설정 묶음을 바로 사용할 수 있습니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`const plugin = {
  meta: {
    name: "eslint-plugin-example",
    version: "1.2.3",
    namespace: "example",
  },
  configs: {},
  rules: {
    "dollar-sign": {
      create(context) {
        // rule implementation...
      },
    },
  },
};

Object.assign(plugin.configs, {
  recommended: [
    {
      plugins: {
        example: plugin,
      },
      rules: {
        "example/dollar-sign": "error",
      },
      languageOptions: {
        globals: {
          myGlobal: "readonly",
        },
      },
    },
  ],
});

export default plugin;`}</code>
          </pre>
        </div>

        <p>
          위 예제처럼 플러그인 내부 config에서 자기 자신의 규칙을 참조하려면,
          먼저 <code>plugin</code> 객체를 만든 뒤 <code>Object.assign()</code>
          으로 <code>configs</code>를 할당하는 패턴을 자주 사용합니다.
        </p>

        <p>사용자는 설정 파일에서 다음과 같이 사용할 수 있습니다.</p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`// eslint.config.js
import { defineConfig } from "eslint/config";
import example from "eslint-plugin-example";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: {
      example,
    },
    ...example.configs.recommended,
  },
]);`}</code>
          </pre>
        </div>

        <p>
          플러그인은 설정을 제공할 수는 있지만, 사용자가 그 설정을 반드시
          사용하도록 강제할 수는 없습니다.
        </p>

        <h2 id="legacy">레거시 설정 호환</h2>
        <p>
          ESLint v9 이후에는 flat config가 기본이지만, 오래된 플러그인은{" "}
          <code>.eslintrc</code> 형식도 함께 지원해야 할 수 있습니다.
        </p>

        <p>
          이 경우 <code>configs</code> 안에 flat config용 설정과 legacy 설정을
          함께 제공할 수 있습니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`Object.assign(plugin.configs, {
  "flat/recommended": [
    {
      plugins: {
        example: plugin,
      },
      rules: {
        "example/dollar-sign": "error",
      },
    },
  ],
  recommended: {
    plugins: ["example"],
    rules: {
      "example/dollar-sign": "error",
    },
  },
});`}</code>
          </pre>
        </div>

        <p>
          새 문서에서는 flat config를 우선 설명하고, 필요할 때만 legacy 호환을
          보충 설명하는 구성이 가장 자연스럽습니다.
        </p>

        <h2 id="testing">테스트와 린팅</h2>
        <p>
          플러그인을 만들었다면 규칙 테스트도 필요합니다. ESLint는 규칙 테스트를
          위해 <code>RuleTester</code> 유틸리티를 제공합니다.
        </p>

        <p>
          또한 플러그인 코드 자체도 lint하는 것이 좋습니다. 플러그인 개발 시
          ESLint 자체와 함께 <code>eslint-plugin-eslint-plugin</code>,{" "}
          <code>eslint-plugin-n</code> 사용을 제안합니다.
        </p>

        <h2>정리</h2>
        <p>
          ESLint 플러그인은 단순한 설정 파일이 아니라, 규칙과 설정, 프로세서를
          하나의 npm 패키지로 묶은 확장 단위입니다.
        </p>
        <p>
          플러그인을 이해할 때는 <code>env</code>, <code>parserOptions</code>,{" "}
          <code>overrides</code> 같은 일반 설정 항목보다, <code>meta</code>,{" "}
          <code>rules</code>, <code>processors</code>, <code>configs</code>가
          어떤 역할을 하는지 먼저 이해하는 것이 더 중요합니다.
        </p>

        <p>
          더 자세한 내용은{" "}
          <a
            href="https://eslint.org/docs/latest/extend/plugins"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 홈페이지
          </a>
          에서 확인하실 수 있습니다.
        </p>

        <nav className="doc-nav">
          <NavLink to="/parser" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/prettier" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
