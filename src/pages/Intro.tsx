import { NavLink } from "react-router-dom";

const exampleCode = `function greet(name) {
  console.log("Hello, " + userName);
}

greet("김린트");`;

export default function Intro() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exampleCode);
      alert("코드가 복사되었습니다.");
    } catch (error) {
      console.error(error);
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <div className="main-content">
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
          ESLint는 JavaScript 코드에서 문제를 찾아내고 수정 방향을 알려주는 정적
          분석 도구입니다.
        </p>
        <a href="https://eslint.org/" target="_blank" rel="noopener noreferrer">공식 홈페이지</a>
      </div>

      <article className="article">
        <h2>ESLint란 무엇인가요?</h2>
        <p>
          ESLint는 코드를 실행하지 않고도 문제를 찾아내는
          <strong> 정적 분석 도구</strong>입니다. 흔히 이런 종류의 도구를{" "}
          <strong>린터(linter)</strong>라고 부릅니다.
        </p>
        <p>
          예를 들어 선언되지 않은 변수를 사용했거나, 사용하지 않는 변수가 남아
          있거나, 팀의 코드 스타일 규칙과 맞지 않는 부분이 있을 때 ESLint가 이를
          미리 알려줍니다.
        </p>
        <p>
          즉, ESLint는 단순히 문법 오류만 찾는 도구가 아니라
          <strong> 버그 예방</strong>, <strong>코드 품질 유지</strong>,
          <strong> 협업 시 일관성 확보</strong>에 도움을 주는 도구입니다.
        </p>

        <div className="code-block">
          <div className="code-block-header">
            <span className="code-lang">JavaScript</span>
            <button className="copy-btn" onClick={handleCopy}>
              복사
            </button>
          </div>
          <pre>
            <code>
              <code>
                <span className="tk-kw">function</span>{" "}
                <span className="tk-fn">greet</span>(<span className="tk-kw tk-err">name</span>) {"{"}
                {"\n  "}
                <span className="tk-kw">console</span>.log(
                <span className="tk-str">"Hello, "</span> +{" "}
                <span className="tk-key tk-err">userName</span>
                );
                {"\n}"}
                {"\n\n"}
                <span className="tk-fn">greet(</span>
                <span className="tk-str">"김린트"</span>
                <span className="tk-fn">)</span>;
              </code>
            </code>
          </pre>
        </div>

        <p>
          위 코드에서는 <code>name</code> 매개변수를 받았지만 실제로는
          <code>userName</code> 이라는 선언되지 않은 변수를 사용하고 있습니다.
          이런 문제는 실행 전에 바로 눈치채기 어려울 수 있지만, ESLint는 이를
          빠르게 찾아낼 수 있습니다.
        </p>

        <h2>ESLint는 왜 필요한가요?</h2>
        <p>
          프로젝트가 작을 때는 사소한 실수도 눈으로 확인할 수 있지만, 코드가
          많아지고 협업이 시작되면 실수를 사람이 전부 찾는 것은 점점
          어려워집니다. ESLint는 이런 반복적인 검사를 자동화해 줍니다.
        </p>

        <ul className="no-bullet">
          <li>
            <h3>1. 버그를 미리 잡을 수 있습니다</h3>
            <p>
              선언되지 않은 변수 사용, 도달할 수 없는 코드, 중복 조건문 같은
              문제를 실행 전에 발견할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>2. 코드 스타일을 통일할 수 있습니다</h3>
            <p>
              세미콜론 사용 여부, 따옴표 스타일, 들여쓰기 규칙 등을 통일해 팀
              전체의 코드 일관성을 유지할 수 있습니다.
            </p>
          </li>
          <li>
            <h3>3. 협업이 쉬워집니다</h3>
            <p>
              사람마다 다른 코딩 습관을 규칙으로 맞출 수 있기 때문에, 코드
              리뷰에서 불필요한 스타일 논쟁을 줄일 수 있습니다.
            </p>
          </li>
          <li>
            <h3>4. 유지보수가 편해집니다</h3>
            <p>
              읽기 쉬운 코드와 일관된 규칙은 시간이 지나도 수정하기 쉬운 코드를
              만드는 데 큰 도움이 됩니다.
            </p>
          </li>
        </ul>

        <h2>언제 사용하면 좋을까요?</h2>
        <p>ESLint는 다음과 같은 상황에서 특히 유용합니다.</p>
        <ul>
          <li>JavaScript 또는 TypeScript 프로젝트를 시작할 때</li>
          <li>React, Vue 같은 프론트엔드 프레임워크를 사용할 때</li>
          <li>여러 명이 함께 협업하는 프로젝트를 진행할 때</li>
          <li>코드 리뷰 전에 기본적인 품질 검사를 자동화하고 싶을 때</li>
        </ul>

        <h2>ESLint가 해주는 일</h2>
        <p>ESLint는 보통 다음과 같은 역할을 합니다.</p>
        <ul>
          <li>문제가 될 수 있는 패턴을 검사합니다.</li>
          <li>팀 규칙에 맞지 않는 코드를 알려줍니다.</li>
          <li>일부 문제는 자동 수정(`--fix`)도 지원합니다.</li>
          <li>
            플러그인과 설정을 통해 React, TypeScript 등으로 확장할 수 있습니다.
          </li>
        </ul>

        <h2>ESLint vs Prettier</h2>
        <p>두 도구는 자주 함께 사용되지만 역할은 다릅니다.</p>
        <ul>
          <li>
            <strong>ESLint</strong>: 코드의 문제점, 잠재적인 버그, 규칙 위반을
            검사하는 도구
          </li>
          <li>
            <strong>Prettier</strong>: 코드의 모양을 일정하게 정리해 주는 코드
            포맷터
          </li>
        </ul>
        <p>
          쉽게 말하면 ESLint는 <strong>코드의 품질</strong>을 보고, Prettier는{" "}
          <strong>코드의 형태</strong>를 맞춥니다. 그래서 둘은 경쟁 관계라기보다
          함께 쓰는 경우가 많습니다.
        </p>

        <h2>정리</h2>
        <p>
          ESLint는 JavaScript 코드를 더 안전하고 일관성 있게 유지할 수 있도록
          도와주는 린터입니다.
        </p>
        <p>
          처음에는 경고가 많아 번거롭게 느껴질 수 있지만, 익숙해지면 “문제가
          생기기 전에 막아주는 안전장치” 역할을 하게 됩니다.
        </p>

        <nav className="doc-nav">
          <NavLink to="/" className="doc-nav-btn">
            ← 홈으로
          </NavLink>
          <NavLink to="/install" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}
