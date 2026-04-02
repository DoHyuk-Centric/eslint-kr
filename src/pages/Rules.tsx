import { NavLink } from "react-router-dom";

export default function Rules() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <span>규칙 (Rules)</span>
      </nav>

      <div className="page-header">
        <h1>규칙 (Rules)</h1>
        <p>
          규칙은 ESLint가 코드의 어떤 패턴을{" "}
          <strong>허용하거나 금지할지</strong> 정의하는 단위입니다. 하나의
          규칙은 하나의 검사 항목에 대응하며, 각 규칙은 독립적으로 켜고 끌 수
          있습니다.
        </p>
      </div>

      <article className="article">
        <h2>규칙의 5가지 카테고리</h2>
        <p className="page-summary">
          ESLint의 규칙은 크게 5가지의 카테고리로 나눌 수 있습니다.
        </p>
        <ol>
          <li>
            오류 방지(Possible Errors) - <code>no-undef</code>,{" "}
            <code>no-unused-vars</code>처럼 런타임 오류나 버그로 이어질 수 있는
            코드 패턴을 잡아냅니다.
          </li>
          <li>
            모범 사례(Best Practices) - <code>eqeqeq</code>, <code>no-var</code>
            처럼 더 안전하고 명확한 코드 작성 방식을 강제합니다.
          </li>
          <li>
            코드 스타일 - <code>indent</code>, <code>quotes</code>,{" "}
            <code>semi</code> 등 팀 내 코드 포맷 일관성을 유지합니다.
          </li>
          <li>
            ES6+ 규칙 - <code>prefer-const</code>, <code>arrow-body-style</code>
            처럼 최신 문법을 적극 활용하도록 유도합니다.
          </li>
          <li>
            설정 예시 - <code>error</code>, <code>warn</code>, <code>off</code>
            세 가지 심각도를 지정할 수 있으며, 배열 형태로 옵션을 함께 넘길수도
            있습니다.
          </li>
        </ol>

        {/* ───────────── 오류 방지 ───────────── */}
        <h2>오류 방지(Possible Errors)</h2>
        <p>
          런타임 오류나 예상치 못한 버그로 이어질 수 있는 코드 패턴을 사전에
          감지합니다. 대표적인 규칙들은 아래와 같습니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>
              <code>no-undef</code> — 선언되지 않은 변수 사용 금지
            </h3>
            <p>
              선언하지 않은 변수를 참조하면 런타임에서{" "}
              <code>ReferenceError</code>가 발생합니다. 이 규칙은 그 전에 오류를
              잡아줍니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 오류: myVar가 선언되지 않음
console.log(myVar);

// 올바른 예
const myVar = "hello";
console.log(myVar);`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-unused-vars</code> — 사용되지 않는 변수 금지
            </h3>
            <p>
              선언했지만 한 번도 사용하지 않는 변수는 코드를 이해하기 어렵게
              만들고, 잠재적인 논리 오류의 신호일 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 오류: count가 선언만 되고 사용되지 않음
const count = 0;

// 올바른 예
const count = 0;
console.log(count);`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-unreachable</code> — 도달할 수 없는 코드 금지
            </h3>
            <p>
              <code>return</code>, <code>throw</code>, <code>break</code> 이후에
              오는 코드는 절대 실행되지 않습니다. 이런 코드는 대부분 실수입니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 오류: return 이후 코드는 실행되지 않음
function greet() {
  return "hello";
  console.log("도달 불가"); // 이 줄은 실행되지 않음
}`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-dupe-keys</code> — 객체 내 중복 키 금지
            </h3>
            <p>
              객체 리터럴에서 같은 키를 두 번 정의하면 나중에 선언된 값이 앞의
              값을 덮어씁니다. 의도치 않은 경우 버그로 이어질 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 오류: name 키가 중복됨
const user = {
  name: "철수",
  name: "영희", // 앞의 값을 덮어씀
};`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-constant-condition</code> — 항상 참/거짓인 조건식 금지
            </h3>
            <p>
              <code>if (true)</code>처럼 항상 같은 결과를 내는 조건식은
              불필요하거나, 개발 중 임시로 작성한 코드가 남아있는 신호입니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 오류: 조건이 항상 true
if (true) {
  doSomething();
}`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        {/* ───────────── 모범 사례 ───────────── */}
        <h2>모범 사례(Best Practices)</h2>
        <p>
          버그는 아니지만, 더 안전하고 명확한 코드 작성 방식을 유도하는
          규칙들입니다. 팀 전체의 코드 품질을 높이는 데 도움이 됩니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>
              <code>eqeqeq</code> — 일치 연산자(<code>===</code>) 사용 강제
            </h3>
            <p>
              <code>==</code>는 타입 변환을 수반해 예상치 못한 결과를 낳습니다.{" "}
              <code>===</code>를 사용하면 타입까지 엄격하게 비교합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 느슨한 비교 — 0 == "0"이 true가 됨
if (score == "0") { ... }

// 엄격한 비교
if (score === 0) { ... }`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-var</code> — <code>var</code> 사용 금지
            </h3>
            <p>
              <code>var</code>는 함수 스코프를 가지며 호이스팅으로 인해 예측하기
              어려운 동작을 일으킵니다. <code>const</code>와 <code>let</code>을
              사용하면 블록 스코프로 더 안전하게 변수를 관리할 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// var는 블록 밖에서도 접근 가능
if (true) {
  var name = "철수";
}
console.log(name); // "철수" — 의도치 않게 접근됨

// let / const는 블록 스코프
if (true) {
  const name = "철수";
}
console.log(name); // ReferenceError`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-eval</code> — <code>eval()</code> 사용 금지
            </h3>
            <p>
              <code>eval()</code>은 문자열을 코드로 실행하기 때문에 보안
              취약점과 성능 저하를 유발합니다. 대부분의 경우 더 안전한 대안이
              존재합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 보안 위험 — 외부 입력이 섞이면 위험
const result = eval("2 + 2");

// 직접 계산
const result = 2 + 2;`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>curly</code> — 중괄호 생략 금지
            </h3>
            <p>
              <code>if</code>, <code>for</code> 등에서 중괄호를 생략하면 코드를
              추가할 때 실수가 생기기 쉽습니다. 항상 중괄호로 감싸는 것을
              권장합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 중괄호 생략 — 아래 줄을 추가하면 버그 발생
if (isLoggedIn)
  redirect();

// 중괄호로 명확하게
if (isLoggedIn) {
  redirect();
}`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-console</code> — <code>console</code> 사용 경고
            </h3>
            <p>
              개발 중 디버깅용으로 남긴 <code>console.log</code>가 프로덕션
              코드에 그대로 배포되는 것을 방지합니다. 보통 <code>warn</code>{" "}
              수준으로 설정해 완전히 금지하지 않고 경고만 표시합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 경고: 프로덕션에 남기지 말 것
console.log("디버그용 로그");

// 로깅이 필요하다면 전용 로거 사용
logger.info("서버 시작됨");`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        {/* ───────────── 코드 스타일 ───────────── */}
        <h2>코드 스타일</h2>
        <p>
          코드의 동작과는 무관하지만, 팀 전체가 일관된 형식으로 코드를 작성할 수
          있도록 도와주는 규칙들입니다. 읽기 쉬운 코드는 유지보수에 큰 도움이
          됩니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>
              <code>indent</code> — 들여쓰기 규칙
            </h3>
            <p>
              스페이스 2칸, 4칸, 탭 등 팀에서 정한 들여쓰기 방식을 강제합니다.
              섞어 쓰면 코드가 지저분해지고 diff가 불필요하게 커집니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 들여쓰기가 혼재됨
function greet() {
    const name = "철수";  // 4칸
  return name;           // 2칸
}

// 2칸으로 통일 (팀 규칙에 따라)
function greet() {
  const name = "철수";
  return name;
}`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>quotes</code> — 따옴표 스타일 통일
            </h3>
            <p>
              작은따옴표(<code>'</code>), 큰따옴표(<code>"</code>), 백틱(
              <code>`</code>) 중 하나를 일관되게 사용하도록 강제합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 따옴표 스타일이 혼재됨
const a = 'hello';
const b = "world";

// 작은따옴표로 통일 (팀 규칙에 따라)
const a = 'hello';
const b = 'world';`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>semi</code> — 세미콜론 사용 여부
            </h3>
            <p>
              세미콜론을 항상 붙일지, 생략할지를 팀 단위로 정해서 강제합니다.
              어느 쪽이든 일관성이 중요합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 세미콜론이 혼재됨
const a = 1
const b = 2;

// 항상 붙이거나 (팀 규칙에 따라)
const a = 1;
const b = 2;`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>comma-dangle</code> — 후행 쉼표 규칙
            </h3>
            <p>
              배열이나 객체의 마지막 항목 뒤에 쉼표를 붙일지 여부를 통일합니다.
              후행 쉼표를 사용하면 항목 추가 시 git diff가 깔끔해지는 장점이
              있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 후행 쉼표 없음 — 줄 추가 시 diff가 2줄 변경됨
const fruits = [
  'apple',
  'banana'
];

// 후행 쉼표 사용 — 줄 추가 시 diff가 1줄만 변경됨
const fruits = [
  'apple',
  'banana',
];`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>max-len</code> — 한 줄 최대 길이 제한
            </h3>
            <p>
              한 줄이 너무 길면 가로 스크롤 없이 읽기 어렵습니다. 보통
              80~120자로 제한해 코드 가독성을 유지합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 한 줄이 너무 길어 읽기 불편함
const message = someCondition ? '조건이 참일 때 보여줄 아주 긴 메시지입니다' : '조건이 거짓일 때 보여줄 아주 긴 메시지입니다';

// 적절히 줄 나누기
const message = someCondition
  ? '조건이 참일 때 보여줄 메시지'
  : '조건이 거짓일 때 보여줄 메시지';`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>eol-last</code> — 파일 끝 개행 필수
            </h3>
            <p>
              파일의 마지막 줄에 개행 문자가 없으면 일부 도구와 git에서 경고가
              발생합니다. POSIX 표준이기도 하며, 협업 시 불필요한 diff를
              방지합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 파일이 개행 없이 끝남
export default App;  ← 여기서 파일 끝 (개행 없음)

// 마지막 줄 뒤에 개행 문자 포함
export default App;
← 개행 문자`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        {/* ───────────── ES6+ ───────────── */}
        <h2>ES6+ 규칙</h2>
        <p>
          최신 JavaScript 문법을 적극적으로 활용하도록 유도하는 규칙들입니다. 더
          간결하고 읽기 쉬운 코드를 작성하는 데 도움이 됩니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>
              <code>prefer-const</code> — 재할당 없는 변수는 <code>const</code>{" "}
              사용
            </h3>
            <p>
              값이 바뀌지 않는 변수에 <code>let</code>을 사용하면 "이 변수는
              나중에 바뀔 수도 있다"는 잘못된 신호를 줍니다. <code>const</code>
              를 사용하면 의도를 명확히 전달할 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 재할당이 없는데 let 사용
let name = '철수';
console.log(name);

// const로 의도 명확히
const name = '철수';
console.log(name);`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>arrow-body-style</code> — 화살표 함수 본문 스타일 통일
            </h3>
            <p>
              화살표 함수에서 값을 바로 반환할 때 불필요한 중괄호와{" "}
              <code>return</code>을 생략할 수 있습니다. 코드가 더 간결해집니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 불필요한 중괄호와 return
const double = (n) => {
  return n * 2;
};

// 간결하게
const double = (n) => n * 2;`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>prefer-template</code> — 문자열 연결 대신 템플릿 리터럴 사용
            </h3>
            <p>
              <code>+</code>로 문자열을 연결하면 가독성이 떨어집니다. 템플릿
              리터럴을 사용하면 변수를 자연스럽게 삽입할 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// + 연산자로 문자열 연결
const greeting = '안녕하세요, ' + name + '님!';

// 템플릿 리터럴 사용
const greeting = \`안녕하세요, \${name}님!\`;`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>object-shorthand</code> — 객체 단축 표기법 사용
            </h3>
            <p>
              변수명과 키 이름이 같을 때 ES6 단축 표기법을 사용하면 코드가 더
              간결해집니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 변수명과 키 이름이 같은데 풀어서 작성
const name = '철수';
const age = 20;
const user = { name: name, age: age };

// 단축 표기법 사용
const user = { name, age };`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>prefer-destructuring</code> — 구조 분해 할당 사용 권장
            </h3>
            <p>
              배열이나 객체에서 값을 꺼낼 때 구조 분해 할당을 사용하면 코드가 더
              간결하고 명확해집니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 일일이 꺼내는 방식
const name = user.name;
const age = user.age;

// 구조 분해 할당
const { name, age } = user;`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>
              <code>no-duplicate-imports</code> — 중복 import 금지
            </h3>
            <p>
              같은 모듈에서 여러 번 <code>import</code>하면 코드가 분산되어
              관리하기 어렵습니다. 하나의 <code>import</code> 구문으로 합쳐서
              작성합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// 같은 모듈을 두 번 import
import { useState } from 'react';
import { useEffect } from 'react';

// 하나로 합치기
import { useState, useEffect } from 'react';`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        {/* ───────────── 설정 예시 ───────────── */}
        <h2>설정 예시</h2>
        <p>
          ESLint의 각 규칙은 심각도와 옵션을 지정해 세밀하게 제어할 수 있습니다.
          프로젝트 성격에 맞게 규칙을 조합하는 것이 중요합니다.
        </p>
        <ul className="no-bullet">
          <li>
            <h3>
              심각도 3단계 — <code>error</code> / <code>warn</code> /{" "}
              <code>off</code>
            </h3>
            <p>
              모든 규칙은 세 가지 심각도 중 하나로 설정합니다.{" "}
              <code>error</code>는 CI를 중단시키고, <code>warn</code>은 경고만
              표시하며, <code>off</code>는 규칙을 비활성화합니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`// eslint.config.js
export default [
  {
    rules: {
      'no-undef': 'error',   // 위반 시 오류 — CI 실패
      'no-console': 'warn',  // 위반 시 경고 — CI 통과
      'semi': 'off',         // 규칙 비활성화
    },
  },
];`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>배열 형태로 옵션 전달</h3>
            <p>
              심각도만으로는 부족할 때 배열의 두 번째 인자로 세부 옵션을 넘길 수
              있습니다. 규칙마다 사용할 수 있는 옵션이 다르므로 공식 문서를
              참고하세요.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`export default [
  {
    rules: {
      // 따옴표는 작은따옴표로, 백틱은 허용
      'quotes': ['error', 'single', { allowTemplateLiterals: true }],

      // 들여쓰기는 스페이스 2칸
      'indent': ['error', 2],

      // 한 줄 최대 100자, URL은 예외
      'max-len': ['warn', { code: 100, ignoreUrls: true }],
    },
  },
];`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>파일별 규칙 분리</h3>
            <p>
              테스트 파일이나 설정 파일처럼 특정 경로에만 다른 규칙을 적용하고
              싶을 때 <code>files</code> 옵션으로 대상을 좁힐 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`export default [
  {
    // 모든 파일에 적용
    rules: {
      'no-console': 'error',
    },
  },
  {
    // 테스트 파일에서는 console 허용
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-console': 'off',
    },
  },
];`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>플러그인과 함께 사용하기</h3>
            <p>
              React, TypeScript 등 외부 플러그인을 설치하면 해당 환경에 맞는
              규칙을 추가로 사용할 수 있습니다.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`import pluginReact from 'eslint-plugin-react';

export default [
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/prop-types': 'warn',
    },
  },
];`}
                </code>
              </pre>
            </div>
          </li>

          <li>
            <h3>전체 설정 예시</h3>
            <p>
              실제 프로젝트에서 자주 쓰이는 규칙들을 모아놓은 기본 설정
              예시입니다. 팀 상황에 맞게 조정해서 사용하세요.
            </p>
            <div className="code-block">
              <div className="code-block-header">
                <span className="code-lang">JavaScript</span>
              </div>
              <pre>
                <code>
                  {`export default [
  {
    rules: {
      // 오류 방지
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-unreachable': 'error',

      // 모범 사례
      'eqeqeq': 'error',
      'no-var': 'error',
      'no-console': 'warn',

      // 코드 스타일
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'max-len': ['warn', { code: 100 }],

      // ES6+
      'prefer-const': 'error',
      'prefer-template': 'warn',
      'no-duplicate-imports': 'error',
    },
  },
];`}
                </code>
              </pre>
            </div>
          </li>
        </ul>

        <h2>더 많은 규칙 참조</h2>
        <NavLink to="/rulesReference">codeRules Reference</NavLink>

        <nav className="doc-nav">
          <NavLink to="/setting" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/settingFile" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}