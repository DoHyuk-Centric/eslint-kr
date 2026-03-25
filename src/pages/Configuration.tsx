const eslintconfigjsModule = `// eslint.config.js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
]);`;

const eslintconfigjsCommon = `// eslint.config.js
const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
]);`;

export default function Configuration() {
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
    <>
      <h2>구성 파일</h2>
      <ul>
        <li>
          <code>eslint.config.js</code>
        </li>
        <li>
          <code>eslint.config.mjs</code>
        </li>
        <li>
          <code>eslint.config.cjs</code>
        </li>
        <li>
          <code>eslint.config.ts</code>
          <a href="">(추가 설정 필요)</a>
        </li>
        <li>
          <code>eslint.config.mts</code>
          <a href="">(추가 설정 필요)</a>
        </li>
        <li>
          <code>eslint.config.cts</code>
          <a href="">(추가 설정 필요)</a>
        </li>
      </ul>
      <p>
        ESLint는 프로젝트 루트 디렉터리의 <code>eslint.config.*</code> 파일을
        찾아 설정을 읽습니다. 이 파일은 규칙(rules), 플러그인(plugins), 적용
        대상 파일(files), 언어 옵션(languageOptions) 등을 정의하는 곳입니다.
      </p>

      <p>
        일반적으로 JavaScript 프로젝트에서는 <code>eslint.config.js</code>를
        가장 많이 사용합니다. ESM 환경에서는 <code>eslint.config.mjs</code>,
        CommonJS 환경에서는 <code>eslint.config.cjs</code>를 사용할 수 있습니다.
      </p>

      <p>
        TypeScript 기반 설정 파일인 <code>eslint.config.ts</code>,
        <code>eslint.config.mts</code>, <code>eslint.config.cts</code>도 사용할
        수 있지만, 추가 설정이 필요합니다. 환경에 따라 Node.js의 실험적
        TypeScript 지원 또는 별도 로더가 필요할 수 있습니다.
      </p>

      <h2>예시</h2>
      <p>
        ESLint의 Flat Config에서는 설정을 하나의 객체가 아닌, 여러 개의{" "}
        <a href="#CO">
          <strong>구성 객체(Configuration Objects)</strong>
        </a>
        로 나누어 배열 형태로 정의합니다.
      </p>

      <p>
        각 구성 객체는 특정 파일 집합에 대해 적용될 규칙, 플러그인, 언어 옵션
        등을 정의하는 단위입니다.
      </p>

      <div className="code-block">
        <div className="code-block-header">
          <span className="code-lang">JavaScript</span>
          <button
            className="copy-btn"
            onClick={() => handleCopy(eslintconfigjsModule)}
          >
            복사
          </button>
        </div>
        <pre>
          <code>
            <span className="tk-comment">// eslint.config.js</span>
            {"\n"}
            <span className="tk-kw-import">import</span> {"{"}{" "}
            <span className="tk-key">defineConfig</span> {"}"}{" "}
            <span className="tk-kw-import">from</span>{" "}
            <span className="tk-str">"eslint/config"</span>;{"\n\n"}
            <span className="tk-kw-import">export</span>{" "}
            <span className="tk-kw-import">default</span>{" "}
            <span className="tk-fn">defineConfig</span>([
            {"\n  "}
            {"{"}
            {"\n    "}
            <span className="tk-key">files</span>: [
            <span className="tk-str">"**/*.js"</span>
            ],
            {"\n    "}
            <span className="tk-key">rules</span>: {"{"}
            {"\n      "}
            <span className="tk-key">semi</span>:{" "}
            <span className="tk-str">"error"</span>,{"\n      "}
            <span className="tk-str">"prefer-const"</span>:{" "}
            <span className="tk-str">"error"</span>,{"\n    "}
            {"}"},{"\n  "}
            {"}"},{"\n"}
            ]);
          </code>
        </pre>
      </div>
      <p>
        예를 들어 위 설정은 <code>**/*.js</code> 파일에만 규칙을 적용하는 하나의
        구성 객체를 정의한 것입니다.
      </p>
      <p>
        이 구성 객체를 통해 두 가지 규칙(<code>semi</code> 및{" "}
        <code>prefer-const</code>)이 활성화 됩니다. 이 규칙들은 이 구성 파일을
        사용하는 ESLint가 처리하는 모든 파일에 적용됩니다.
      </p>
      <p>
        프로젝트의 <code>package.json</code>에 <code>"type": "module"</code>이
        설정되어 있지 않은 경우, <code>eslint.config.js</code> 파일은 CommonJS
        형식으로 작성해야 합니다.
      </p>

      <div className="code-block">
        <div className="code-block-header">
          <span className="code-lang">JavaScript</span>
          <button
            className="copy-btn"
            onClick={() => handleCopy(eslintconfigjsCommon)}
          >
            복사
          </button>
        </div>
        <pre>
          <code>
            <span className="tk-comment">// eslint.config.js</span>
            {"\n"}
            <span className="tk-kw">const</span> {"{"}{" "}
            <span className="tk-key">defineConfig</span> {"}"} ={" "}
            <span className="tk-fn">require</span>(
            <span className="tk-str">"eslint/config"</span>);
            {"\n\n"}
            <span className="tk-key">module</span>.
            <span className="tk-key">exports</span> ={" "}
            <span className="tk-fn">defineConfig</span>([
            {"\n  "}
            {"{"}
            {"\n    "}
            <span className="tk-key">files</span>: [
            <span className="tk-str">"**/*.js"</span>
            ],
            {"\n    "}
            <span className="tk-key">rules</span>: {"{"}
            {"\n      "}
            <span className="tk-key">semi</span>:{" "}
            <span className="tk-str">"error"</span>,{"\n      "}
            <span className="tk-str">"prefer-const"</span>:{" "}
            <span className="tk-str">"error"</span>,{"\n    "}
            {"}"},{"\n  "}
            {"}"},{"\n"}
            ]);
          </code>
        </pre>
      </div>

      <h2 id="CO">구성 객체(Configuration Objects)</h2>
      <p>
        각 구성 객체는 ESLint가 특정 파일 집합을 검사하기 위해 필요한 모든
        설정을 포함합니다. 구성 객체는 다음과 같은 주요 속성들로 이루어집니다.
      </p>

      <ul className="no-bullet">
        <li>
          <h3>기본 속성</h3>
          <ul>
            <li>
              <code>name</code>
              <p>
                구성 객체의 이름입니다. 오류 메시지나 구성 검사기에서 어떤
                설정이 적용되었는지 식별하는 데 사용됩니다.
              </p>
            </li>
            <li>
              <code>basePath</code>
              <p>
                구성 객체를 적용할 하위 디렉터리의 경로입니다. 상대 경로 또는
                절대 경로를 사용할 수 있습니다.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h3>파일 적용 범위</h3>
          <ul>
            <li>
              <code>files</code>
              <p>
                구성 객체를 적용할 파일을 지정하는 글로브(glob) 패턴 배열입니다.
                지정하지 않으면, 다른 구성 객체와 일치하는 모든 파일에
                적용됩니다.
              </p>
            </li>
            <li>
              <code>ignores</code>
              <p>
                구성 객체가 적용되지 않아야 하는 파일을 지정하는 글로브 패턴
                배열입니다.
              </p>
              <ul>
                <li>
                  <code>files</code>와 함께 사용하면 해당 패턴을 제외한 파일에만
                  적용됩니다.
                </li>
                <li>
                  <code>ignores</code>만 단독으로 사용하면 전역 무시 규칙으로
                  동작하여 모든 구성 객체에 적용됩니다.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <h3>구성 확장</h3>
          <ul>
            <li>
              <code>extends</code>
              <p>
                다른 설정을 확장할 때 사용합니다. 문자열, 구성 객체, 또는 구성
                배열을 지정할 수 있습니다.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h3>languageOptions</h3>
          <p>JavaScript 파싱 및 실행 환경과 관련된 설정을 정의합니다.</p>
          <ul>
            <li>
              <code>ecmaVersion</code>
              <p>
                사용할 ECMAScript 버전입니다. 예: <code>2022</code>,{" "}
                <code>5</code>,<code>"latest"</code> (기본값:{" "}
                <code>"latest"</code>)
              </p>
            </li>
            <li>
              <code>sourceType</code>
              <p>코드의 모듈 유형을 지정합니다.</p>
              <ul>
                <li>
                  <code>"script"</code>: 일반 스크립트
                </li>
                <li>
                  <code>"module"</code>: ESM
                </li>
                <li>
                  <code>"commonjs"</code>: CommonJS
                </li>
              </ul>
              <p>
                기본값은 <code>.js</code> 및 <code>.mjs</code> 파일의 경우
                <code>"module"</code>, <code>.cjs</code> 파일의 경우
                <code>"commonjs"</code>입니다.
              </p>
            </li>
            <li>
              <code>globals</code>
              <p>전역 변수로 인식할 식별자를 정의합니다.</p>
            </li>
            <li>
              <code>parser</code>
              <p>
                사용할 파서를 지정합니다. <code>parse()</code> 또는
                <code>parseForESLint()</code> 메서드를 가진 객체여야 합니다.
                기본값은 <code>espree</code>입니다.
              </p>
            </li>
            <li>
              <code>parserOptions</code>
              <p>
                파서에 전달할 추가 옵션입니다. 사용 가능한 옵션은 파서에 따라
                다릅니다.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h3>linterOptions</h3>
          <p>린터 동작 방식과 관련된 설정입니다.</p>
          <ul>
            <li>
              <code>noInlineConfig</code>
              <p>
                코드 내부의 ESLint 주석 설정 사용을 허용할지 여부를 지정합니다.
              </p>
            </li>
            <li>
              <code>reportUnusedDisableDirectives</code>
              <p>
                사용되지 않은 <code>eslint-disable</code> 지시문을 보고할지
                여부를 지정합니다. 기본값은 <code>"warn"</code>입니다.
              </p>
            </li>
            <li>
              <code>reportUnusedInlineConfigs</code>
              <p>
                사용되지 않은 인라인 설정을 보고할지 여부를 지정합니다. 기본값은
                <code>"off"</code>입니다.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h3>확장 기능</h3>
          <ul>
            <li>
              <code>plugins</code>
              <p>
                플러그인 이름과 플러그인 객체를 매핑하는 객체입니다.{" "}
                <code>files</code>가 지정된 경우 해당 파일에서만 활성화됩니다.
              </p>
            </li>
            <li>
              <code>processor</code>
              <p>
                <code>preprocess()</code> 및 <code>postprocess()</code> 메서드를
                가진 객체이거나, <code>"pluginName/processorName"</code> 형식의
                문자열입니다.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h3>규칙 및 설정</h3>
          <ul>
            <li>
              <code>rules</code>
              <p>
                ESLint 규칙을 정의하는 객체입니다. <code>files</code> 또는
                <code>ignores</code>가 지정된 경우 해당 파일에만 적용됩니다.
              </p>
            </li>
            <li>
              <code>settings</code>
              <p>여러 규칙에서 공유할 수 있는 설정 데이터를 정의합니다.</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
