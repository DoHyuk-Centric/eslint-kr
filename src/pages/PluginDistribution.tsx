import { NavLink } from "react-router-dom";

export default function PluginDistribution() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <NavLink to="/plugin">플러그인 (Plugin)</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>배포방법</span>
      </nav>

      <div className="page-header">
        <h1>플러그인 배포</h1>
      </div>

      <article className="article">
        <h2>1. 플러그인 패키지 제작</h2>
        <p>
          ESLint 플러그인은 특정 인터페이스를 따르는 객체입니다. 기본적으로
          플러그인 객체에는 <code>rules</code>, <code>configs</code>,{" "}
          <code>processors</code>와 같은 속성이 포함됩니다. 가장 기본적인
          출발점은 플러그인 객체를 export하는 npm 패키지를 만드는 것입니다.
        </p>

        <p>예시</p>
        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>
              {`const plugin = {
  rules: {},
  configs: {},
  processors: {},
};

export default plugin;`}
            </code>
          </pre>
        </div>

        <h2>2. 패키지 이름 정하기</h2>
        <p>
          플러그인 네임스페이스는 보통 npm 패키지 이름에서{" "}
          <code>eslint-plugin-</code> 접두사를 뺀 값을 사용합니다. 예를 들어
          패키지 이름이 <code>eslint-plugin-example</code>이면, ESLint
          설정에서는 보통 <code>example</code>이라는 이름으로 사용합니다. 그래서
          실제 배포할 때도 패키지 이름을 <code>eslint-plugin-이름</code> 형태로
          짓는 것이 가장 자연스럽습니다.
        </p>

        <h2>3. 규칙 만들기</h2>
        <p>
          플러그인의 핵심은 <code>rules</code>입니다. 플러그인은 커스텀 규칙을
          제공할 수 있고, 사용자는 그 규칙을 <code>pluginName/ruleName</code>{" "}
          형식으로 켤 수 있습니다. 즉, 배포 가능한 플러그인을 만들기위해서{" "}
          <code>rules</code>에 규칙 구현을 넣는 경우가 매우 일반적입니다.{" "}
        </p>

        <p>예시</p>
        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>
              {`const noFooRule = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow foo identifier",
    },
    schema: [],
  },
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "foo") {
          context.report({
            node,
            message: "'foo' 식별자는 사용할 수 없습니다.",
          });
        }
      },
    };
  },
};

const plugin = {
  rules: {
    "no-foo": noFooRule,
  },
};

export default plugin;`}
            </code>
          </pre>
        </div>

        <h2 id="env">4. 추천 설정(configs) 설정하기</h2>
        <p>
          <code>rules</code>만 내보내는것이 아닌 <code>configs</code>도 함께
          제공할 수 있습니다. 이 방식은 사용자가 플러그인을 설치한 뒤 규칙을
          하나하나 켜지 않고, <code>recommended</code> 같은 묶음 설정으로 바로
          사용할 수 있게 해줍니다. 이는 배포 품질을 크게 좌우하는 영역중
          하나입니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>
              {`const plugin = {
  rules: {
    "no-foo": noFooRule,
  },
  configs: {},
};

Object.assign(plugin.configs, {
  recommended: [
    {
      plugins: {
        myteam: plugin,
      },
      rules: {
        "myteam/no-foo": "error",
      },
    },
  ],
});

export default plugin;`}
            </code>
          </pre>
        </div>

        <h2 id="extends">5. 기본 export(default export)</h2>
        <p>
          npm 패키지로 배포할 계획이라면, 플러그인 객체를 내보내는 모듈이
          패키지의 기본 <code>export</code>여야 합니다. 그래야 ESLint가 CLI의{" "}
          <code>--plugin</code> 옵션으로 해당 플러그인을 찾아 가져올 수
          있습니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`export default plugin;`}</code>
          </pre>
        </div>

        <h2 id="parserOptions">6. npm 패키지로 발행</h2>
        <p>
          일반 Node 패키지처럼 <code>package.json</code>을 갖추고 npm에
          publish하면 됩니다. 다음은 <code>package.json</code> 예시입니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
          </div>
          <pre>
            <code>{`{
  "name": "eslint-plugin-myteam",
  "version": "1.0.0",
  "type": "module",
  "main": "./index.js",
  "exports": {
    ".": "./index.js"
  },
  "keywords": ["eslint", "eslintplugin"],
  "peerDependencies": {
    "eslint": "^9.0.0 || ^10.0.0"
  }
}`}</code>
          </pre>
        </div>

        <ul>
          <li>
            <code>name</code> : 플러그인 관례에 맞는 이름
          </li>
          <li>
            <code>main / exports</code> : 기본 진입점 지정
          </li>
          <li>
            <code>peerDependencies</code> : 지원하는 ESLint 버전 명시
          </li>
        </ul>

        <h2>7. 플러그인 사용</h2>
        <p>
          배포된 플러그인은 프로젝트에서 설치 후 ESLint 설정 파일에서 사용할 수
          있습니다.
        </p>

        <div className="code-block">
          <pre>
            <code>{`npm install eslint-plugin-myteam`}</code>
          </pre>
        </div>

        <div className="code-block">
          <pre>
            <code>{`// eslint.config.js (flat config)
import myteam from "eslint-plugin-myteam";

export default [
  {
    plugins: {
      myteam,
    },
    rules: {
      "myteam/no-foo": "error",
    },
  },
];`}</code>
          </pre>
        </div>

        <nav className="doc-nav">
          <NavLink to="/plugin" className="doc-nav-btn">
            ← 이전
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
