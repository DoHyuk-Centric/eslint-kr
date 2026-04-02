import { NavLink } from "react-router-dom";

export default function RulesReference() {
  return (
    <div className="main-content">
      <nav className="breadcrumb">
        <NavLink to="/">ESLint-KR</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>핵심개념</span>
        <span className="breadcrumb-sep">›</span>
        <NavLink to="/Rules">규칙 (Rules)</NavLink>
        <span className="breadcrumb-sep">›</span>
        <span>규칙 레퍼런스(Rules Reference)</span>
      </nav>

      <div className="page-header">
        <h1>규칙 레퍼런스 (Rules Reference)</h1>
        <p>
          ESLint의 규칙은 유형별로 그룹화되어 있어 각 규칙의 목적을 이해하는 데
          도움이 됩니다. 각 규칙에는 다음 이모지로 속성을 표시합니다.
        </p>
      </div>

      <article className="article">
        <ul>
          <li>
            ✅ <strong>Recommended</strong> — 설정 파일에서{" "}
            <code>@eslint/js</code>의 <code>recommended</code> 설정을 사용하면
            활성화되는 규칙
          </li>
          <li>
            🔧 <strong>Fixable</strong> — <code>--fix</code> 커맨드라인 옵션으로
            자동 수정이 가능한 규칙
          </li>
          <li>
            💡 <strong>hasSuggestions</strong> — 에디터의 제안(Suggestions)
            기능으로 수동 수정이 가능한 규칙
          </li>
          <li>
            ❄️ <strong>Frozen</strong> — 현재 동결(frozen) 상태로 기능 요청을
            받지 않는 규칙
          </li>
        </ul>

        {/* ──────────────────────────────────────────
            1. Possible Problems
        ────────────────────────────────────────── */}
        <h2>Possible Problems</h2>
        <p>코드의 잠재적인 논리 오류와 관련된 규칙들입니다.</p>
        <ul>
          <li>
            ✅ <code>array-callback-return</code> — 배열 메서드의 콜백에서{" "}
            <code>return</code> 문 강제 사용
          </li>
          <li>
            ✅ <code>constructor-super</code> — 생성자에서 <code>super()</code>{" "}
            호출 강제
          </li>
          <li>
            ✅ <code>for-direction</code> — <code>for</code> 루프 업데이트
            절이 카운터를 올바른 방향으로 이동하는지 확인
          </li>
          <li>
            ✅ 💡 <code>getter-return</code> — getter에서 <code>return</code>{" "}
            문 강제 사용
          </li>
          <li>
            ✅ <code>no-async-promise-executor</code> — Promise
            실행기(executor)로 async 함수 사용 금지
          </li>
          <li>
            <code>no-await-in-loop</code> — 반복문 내부에서 <code>await</code>{" "}
            사용 금지
          </li>
          <li>
            ✅ <code>no-class-assign</code> — 클래스 멤버 재할당 금지
          </li>
          <li>
            ✅ 🔧 <code>no-compare-neg-zero</code> — <code>-0</code>과의 비교
            금지
          </li>
          <li>
            ✅ <code>no-cond-assign</code> — 조건식에서 할당 연산자 사용 금지
          </li>
          <li>
            ✅ <code>no-const-assign</code> — <code>const</code>,{" "}
            <code>using</code>, <code>await using</code> 변수 재할당 금지
          </li>
          <li>
            ✅ <code>no-constant-binary-expression</code> — 연산 결과가 값에
            영향을 주지 않는 표현식 금지
          </li>
          <li>
            ✅ <code>no-constant-condition</code> — 조건에 상수 표현식 사용
            금지
          </li>
          <li>
            <code>no-constructor-return</code> — 생성자에서 값 반환 금지
          </li>
          <li>
            ✅ <code>no-control-regex</code> — 정규식에서 제어 문자 사용 금지
          </li>
          <li>
            ✅ 💡 <code>no-debugger</code> — <code>debugger</code> 사용 금지
          </li>
          <li>
            ✅ <code>no-dupe-args</code> — <code>function</code> 정의에서
            중복 인자 금지
          </li>
          <li>
            ✅ <code>no-dupe-class-members</code> — 중복 클래스 멤버 금지
          </li>
          <li>
            ✅ <code>no-dupe-else-if</code> — if-else-if 체인에서 중복 조건
            금지
          </li>
          <li>
            ✅ <code>no-dupe-keys</code> — 객체 리터럴에서 중복 키 금지
          </li>
          <li>
            ✅ <code>no-duplicate-case</code> — 중복 case 레이블 금지
          </li>
          <li>
            <code>no-duplicate-imports</code> — 모듈 중복 import 금지
          </li>
          <li>
            ✅ <code>no-empty-character-class</code> — 정규식에서 빈 문자
            클래스 금지
          </li>
          <li>
            ✅ <code>no-empty-pattern</code> — 빈 구조 분해 패턴 금지
          </li>
          <li>
            ✅ <code>no-ex-assign</code> — <code>catch</code> 절에서 예외
            변수 재할당 금지
          </li>
          <li>
            ✅ <code>no-fallthrough</code> — <code>case</code> 문의
            폴스루(fallthrough) 금지
          </li>
          <li>
            ✅ <code>no-func-assign</code> — <code>function</code> 선언
            재할당 금지
          </li>
          <li>
            ✅ <code>no-import-assign</code> — import된 바인딩에 할당 금지
          </li>
          <li>
            ✅ <code>no-inner-declarations</code> — 중첩 블록에서 변수 또는{" "}
            <code>function</code> 선언 금지
          </li>
          <li>
            ✅ <code>no-invalid-regexp</code> — <code>RegExp</code> 생성자에서
            잘못된 정규식 문자열 금지
          </li>
          <li>
            ✅ <code>no-irregular-whitespace</code> — 비정상적인 공백 금지
          </li>
          <li>
            ✅ <code>no-loss-of-precision</code> — 정밀도를 잃는 리터럴 숫자
            금지
          </li>
          <li>
            ✅ 🔧 💡 <code>no-misleading-character-class</code> — 문자 클래스
            구문에서 여러 코드 포인트로 구성된 문자 금지
          </li>
          <li>
            ✅ <code>no-new-native-nonconstructor</code> — 비생성자 전역 함수에{" "}
            <code>new</code> 연산자 사용 금지
          </li>
          <li>
            ✅ <code>no-obj-calls</code> — 전역 객체 속성을 함수로 호출 금지
          </li>
          <li>
            🔧 <code>no-promise-executor-return</code> — Promise 실행기
            함수에서 값 반환 금지
          </li>
          <li>
            ✅ <code>no-prototype-builtins</code> — 객체에서 일부{" "}
            <code>Object.prototype</code> 메서드를 직접 호출 금지
          </li>
          <li>
            ✅ <code>no-self-assign</code> — 양쪽이 동일한 할당 금지
          </li>
          <li>
            <code>no-self-compare</code> — 양쪽이 동일한 비교 금지
          </li>
          <li>
            ✅ <code>no-setter-return</code> — setter에서 값 반환 금지
          </li>
          <li>
            ✅ <code>no-sparse-arrays</code> — 희소(sparse) 배열 금지
          </li>
          <li>
            <code>no-template-curly-in-string</code> — 일반 문자열에서
            템플릿 리터럴 플레이스홀더 문법 금지
          </li>
          <li>
            ✅ <code>no-this-before-super</code> — 생성자에서{" "}
            <code>super()</code> 호출 전 <code>this</code>/<code>super</code>{" "}
            사용 금지
          </li>
          <li>
            ✅ <code>no-unassigned-vars</code> — 읽히지만 한 번도 할당되지
            않은 <code>let</code>/<code>var</code> 변수 금지
          </li>
          <li>
            ✅ <code>no-undef</code> — <code>/*global */</code> 주석에
            명시되지 않은 미선언 변수 사용 금지
          </li>
          <li>
            ✅ <code>no-unexpected-multiline</code> — 혼란스러운 다중 줄
            표현식 금지
          </li>
          <li>
            <code>no-unmodified-loop-condition</code> — 수정되지 않는 루프
            조건 금지
          </li>
          <li>
            ✅ <code>no-unreachable</code> — <code>return</code>,{" "}
            <code>throw</code>, <code>continue</code>, <code>break</code> 문
            이후 도달 불가능한 코드 금지
          </li>
          <li>
            <code>no-unreachable-loop</code> — 단 한 번만 실행될 수 있는
            루프 금지
          </li>
          <li>
            ✅ <code>no-unsafe-finally</code> — <code>finally</code> 블록에서
            제어 흐름 문 금지
          </li>
          <li>
            ✅ 🔧 💡 <code>no-unsafe-negation</code> — 관계 연산자의 왼쪽
            피연산자를 부정하는 것 금지
          </li>
          <li>
            ✅ <code>no-unsafe-optional-chaining</code> —{" "}
            <code>undefined</code> 값이 허용되지 않는 컨텍스트에서 옵셔널
            체이닝 사용 금지
          </li>
          <li>
            ✅ <code>no-unused-private-class-members</code> — 사용되지 않는
            private 클래스 멤버 금지
          </li>
          <li>
            ✅ 💡 <code>no-unused-vars</code> — 사용되지 않는 변수 금지
          </li>
          <li>
            <code>no-use-before-define</code> — 변수 선언 전 사용 금지
          </li>
          <li>
            💡 <code>no-useless-assignment</code> — 값이 사용되지 않는 변수
            할당 금지
          </li>
          <li>
            ✅ <code>no-useless-backreference</code> — 정규식에서 불필요한
            역참조(backreference) 금지
          </li>
          <li>
            <code>require-atomic-updates</code> — <code>await</code> 또는{" "}
            <code>yield</code> 사용으로 인해 경쟁 조건(race condition)을
            유발할 수 있는 할당 금지
          </li>
          <li>
            ✅ 🔧 💡 <code>use-isnan</code> — <code>NaN</code> 확인 시{" "}
            <code>isNaN()</code> 호출 강제
          </li>
          <li>
            ✅ 💡 <code>valid-typeof</code> — <code>typeof</code> 표현식을
            유효한 문자열과 비교 강제
          </li>
        </ul>

        {/* ──────────────────────────────────────────
            2. Suggestions
        ────────────────────────────────────────── */}
        <h2>Suggestions</h2>
        <p>코드 작성 방식에 대한 대안을 제안하는 규칙들입니다.</p>
        <ul>
          <li>
            <code>accessor-pairs</code> — 객체와 클래스에서 getter/setter 쌍
            강제
          </li>
          <li>
            🔧 ❄️ <code>arrow-body-style</code> — 화살표 함수 본문에 중괄호
            강제
          </li>
          <li>
            <code>block-scoped-var</code> — 변수가 정의된 스코프 내에서만
            사용 강제
          </li>
          <li>
            ❄️ <code>camelcase</code> — 카멜케이스 네이밍 규칙 강제
          </li>
          <li>
            🔧 ❄️ <code>capitalized-comments</code> — 주석 첫 글자 대문자
            사용 강제 또는 금지
          </li>
          <li>
            <code>class-methods-use-this</code> — 클래스 메서드에서{" "}
            <code>this</code> 활용 강제
          </li>
          <li>
            <code>complexity</code> — 프로그램 내 최대 순환
            복잡도(cyclomatic complexity) 강제
          </li>
          <li>
            <code>consistent-return</code> — <code>return</code> 문에서 항상
            값을 지정하거나 지정하지 않도록 강제
          </li>
          <li>
            ❄️ <code>consistent-this</code> — 현재 실행 컨텍스트 캡처 시
            일관된 이름 강제
          </li>
          <li>
            🔧 ❄️ <code>curly</code> — 모든 제어문에서 일관된 중괄호 스타일
            강제
          </li>
          <li>
            <code>default-case</code> — <code>switch</code> 문에서{" "}
            <code>default</code> case 강제
          </li>
          <li>
            <code>default-case-last</code> — <code>switch</code> 문의{" "}
            <code>default</code> 절을 마지막에 배치 강제
          </li>
          <li>
            ❄️ <code>default-param-last</code> — 기본 매개변수를 마지막에
            배치 강제
          </li>
          <li>
            🔧 ❄️ <code>dot-notation</code> — 가능한 경우 점 표기법 강제
          </li>
          <li>
            🔧 <code>eqeqeq</code> — <code>===</code> 및 <code>!==</code>{" "}
            사용 강제
          </li>
          <li>
            ❄️ <code>func-name-matching</code> — 함수 이름을 할당된 변수나
            속성 이름과 일치시키도록 강제
          </li>
          <li>
            <code>func-names</code> — 이름 있는 <code>function</code> 표현식
            강제 또는 금지
          </li>
          <li>
            ❄️ <code>func-style</code> — <code>function</code> 선언 또는
            변수에 할당된 표현식의 일관된 사용 강제
          </li>
          <li>
            <code>grouped-accessor-pairs</code> — 객체 리터럴과 클래스에서
            getter/setter 쌍을 그룹화 강제
          </li>
          <li>
            <code>guard-for-in</code> — <code>for-in</code> 루프에{" "}
            <code>if</code> 문 포함 강제
          </li>
          <li>
            ❄️ <code>id-denylist</code> — 지정한 식별자 금지
          </li>
          <li>
            ❄️ <code>id-length</code> — 식별자 최소·최대 길이 강제
          </li>
          <li>
            ❄️ <code>id-match</code> — 식별자가 지정된 정규식과 일치하도록
            강제
          </li>
          <li>
            ❄️ <code>init-declarations</code> — 변수 선언 시 초기화 강제
            또는 금지
          </li>
          <li>
            🔧 ❄️ <code>logical-assignment-operators</code> — 논리 할당 연산자
            축약형 강제 또는 금지
          </li>
          <li>
            <code>max-classes-per-file</code> — 파일당 최대 클래스 수 강제
          </li>
          <li>
            <code>max-depth</code> — 블록 최대 중첩 깊이 강제
          </li>
          <li>
            <code>max-lines</code> — 파일당 최대 라인 수 강제
          </li>
          <li>
            <code>max-lines-per-function</code> — 함수당 최대 코드 라인 수
            강제
          </li>
          <li>
            <code>max-nested-callbacks</code> — 콜백 최대 중첩 깊이 강제
          </li>
          <li>
            <code>max-params</code> — 함수 정의의 최대 매개변수 수 강제
          </li>
          <li>
            <code>max-statements</code> — 함수 블록에서 허용되는 최대 구문
            수 강제
          </li>
          <li>
            <code>new-cap</code> — 생성자 이름의 첫 글자 대문자 강제
          </li>
          <li>
            <code>no-alert</code> — <code>alert</code>, <code>confirm</code>,{" "}
            <code>prompt</code> 사용 금지
          </li>
          <li>
            🔧 <code>no-array-constructor</code> — <code>Array</code> 생성자
            금지
          </li>
          <li>
            <code>no-bitwise</code> — 비트 연산자 금지
          </li>
          <li>
            <code>no-caller</code> — <code>arguments.caller</code> 또는{" "}
            <code>arguments.callee</code> 사용 금지
          </li>
          <li>
            ✅ <code>no-case-declarations</code> — case 절에서 어휘적 선언
            금지
          </li>
          <li>
            💡 <code>no-console</code> — <code>console</code> 사용 금지
          </li>
          <li>
            ❄️ <code>no-continue</code> — <code>continue</code> 문 금지
          </li>
          <li>
            ✅ <code>no-delete-var</code> — 변수 삭제 금지
          </li>
          <li>
            🔧 ❄️ <code>no-div-regex</code> — 정규식 시작에 등호 명시적 사용
            금지
          </li>
          <li>
            🔧 ❄️ <code>no-else-return</code> — <code>if</code> 문의{" "}
            <code>return</code> 문 이후 <code>else</code> 블록 금지
          </li>
          <li>
            ✅ 💡 <code>no-empty</code> — 빈 블록 문 금지
          </li>
          <li>
            <code>no-empty-function</code> — 빈 함수 금지
          </li>
          <li>
            ✅ <code>no-empty-static-block</code> — 빈 정적 블록 금지
          </li>
          <li>
            <code>no-eq-null</code> — 타입 검사 연산자 없이 <code>null</code>{" "}
            비교 금지
          </li>
          <li>
            <code>no-eval</code> — <code>eval()</code> 사용 금지
          </li>
          <li>
            <code>no-extend-native</code> — 네이티브 타입 확장 금지
          </li>
          <li>
            🔧 <code>no-extra-bind</code> — 불필요한 <code>.bind()</code>{" "}
            호출 금지
          </li>
          <li>
            ✅ 🔧 ❄️ <code>no-extra-boolean-cast</code> — 불필요한 불리언 형
            변환 금지
          </li>
          <li>
            🔧 ❄️ <code>no-extra-label</code> — 불필요한 레이블 금지
          </li>
          <li>
            ✅ <code>no-global-assign</code> — 네이티브 객체 또는 읽기 전용
            전역 변수에 할당 금지
          </li>
          <li>
            🔧 ❄️ <code>no-implicit-coercion</code> — 단축 타입 변환 금지
          </li>
          <li>
            <code>no-implicit-globals</code> — 전역 스코프에서 선언 금지
          </li>
          <li>
            <code>no-implied-eval</code> — <code>eval()</code>과 유사한
            메서드 사용 금지
          </li>
          <li>
            ❄️ <code>no-inline-comments</code> — 코드 뒤 인라인 주석 금지
          </li>
          <li>
            <code>no-invalid-this</code> — <code>this</code> 값이{" "}
            <code>undefined</code>인 컨텍스트에서 사용 금지
          </li>
          <li>
            <code>no-iterator</code> — <code>__iterator__</code> 속성 사용
            금지
          </li>
          <li>
            🔧 ❄️ <code>no-label-var</code> — 변수 이름과 같은 레이블 금지
          </li>
          <li>
            🔧 ❄️ <code>no-labels</code> — 레이블 문 금지
          </li>
          <li>
            <code>no-lone-blocks</code> — 불필요한 중첩 블록 금지
          </li>
          <li>
            🔧 ❄️ <code>no-lonely-if</code> — <code>else</code> 블록의 유일한
            구문으로 <code>if</code> 문 금지
          </li>
          <li>
            <code>no-loop-func</code> — 루프 문 내부에서 안전하지 않은 참조를
            포함하는 함수 선언 금지
          </li>
          <li>
            ❄️ <code>no-magic-numbers</code> — 매직 넘버(magic number) 금지
          </li>
          <li>
            <code>no-multi-assign</code> — 연쇄 할당 표현식 금지
          </li>
          <li>
            ❄️ <code>no-multi-str</code> — 여러 줄에 걸친 문자열 금지
          </li>
          <li>
            ❄️ <code>no-negated-condition</code> — 부정 조건 금지
          </li>
          <li>
            ❄️ <code>no-nested-ternary</code> — 중첩 삼항 표현식 금지
          </li>
          <li>
            <code>no-new</code> — 할당이나 비교 없이 <code>new</code> 연산자
            사용 금지
          </li>
          <li>
            <code>no-new-func</code> — <code>Function</code> 객체에{" "}
            <code>new</code> 연산자 사용 금지
          </li>
          <li>
            <code>no-new-wrappers</code> — <code>String</code>,{" "}
            <code>Number</code>, <code>Boolean</code> 객체에 <code>new</code>{" "}
            연산자 사용 금지
          </li>
          <li>
            ✅ 🔧 <code>no-nonoctal-decimal-escape</code> — 문자열 리터럴에서{" "}
            <code>\8</code> 및 <code>\9</code> 이스케이프 시퀀스 금지
          </li>
          <li>
            💡 <code>no-object-constructor</code> — 인수 없이{" "}
            <code>Object</code> 생성자 호출 금지
          </li>
          <li>
            ✅ <code>no-octal</code> — 8진수 리터럴 금지
          </li>
          <li>
            <code>no-octal-escape</code> — 문자열 리터럴에서 8진수 이스케이프
            시퀀스 금지
          </li>
          <li>
            <code>no-param-reassign</code> — 함수 매개변수 재할당 금지
          </li>
          <li>
            ❄️ <code>no-plusplus</code> — 단항 연산자 <code>++</code> 및{" "}
            <code>--</code> 금지
          </li>
          <li>
            <code>no-proto</code> — <code>__proto__</code> 속성 사용 금지
          </li>
          <li>
            ✅ <code>no-redeclare</code> — 변수 재선언 금지
          </li>
          <li>
            ✅ 🔧 <code>no-regex-spaces</code> — 정규식에서 여러 공백 금지
          </li>
          <li>
            <code>no-restricted-exports</code> — 내보내기에서 지정한 이름
            금지
          </li>
          <li>
            <code>no-restricted-globals</code> — 지정한 전역 변수 금지
          </li>
          <li>
            <code>no-restricted-imports</code> — <code>import</code>로 로드
            시 지정한 모듈 금지
          </li>
          <li>
            <code>no-restricted-properties</code> — 특정 객체의 특정 속성
            금지
          </li>
          <li>
            <code>no-restricted-syntax</code> — 지정한 구문 금지
          </li>
          <li>
            <code>no-return-assign</code> — <code>return</code> 문에서 할당
            연산자 금지
          </li>
          <li>
            <code>no-script-url</code> — <code>javascript:</code> URL 금지
          </li>
          <li>
            <code>no-sequences</code> — 쉼표 연산자 금지
          </li>
          <li>
            <code>no-shadow</code> — 외부 스코프에 선언된 변수를 가리는
            변수 선언 금지
          </li>
          <li>
            ✅ <code>no-shadow-restricted-names</code> — 제한된 이름을
            가리는 식별자 금지
          </li>
          <li>
            ❄️ <code>no-ternary</code> — 삼항 연산자 금지
          </li>
          <li>
            <code>no-throw-literal</code> — 리터럴을 예외로 throw 금지
          </li>
          <li>
            🔧 ❄️ <code>no-undef-init</code> — 변수를 <code>undefined</code>로
            초기화 금지
          </li>
          <li>
            ❄️ <code>no-undefined</code> — 식별자로서 <code>undefined</code>{" "}
            사용 금지
          </li>
          <li>
            ❄️ <code>no-underscore-dangle</code> — 식별자에서 매달린
            밑줄(dangling underscore) 금지
          </li>
          <li>
            🔧 ❄️ <code>no-unneeded-ternary</code> — 더 간단한 대안이 있을
            때 삼항 연산자 금지
          </li>
          <li>
            <code>no-unused-expressions</code> — 사용되지 않는 표현식 금지
          </li>
          <li>
            ✅ 🔧 <code>no-unused-labels</code> — 사용되지 않는 레이블 금지
          </li>
          <li>
            <code>no-useless-call</code> — 불필요한 <code>.call()</code> 및{" "}
            <code>.apply()</code> 호출 금지
          </li>
          <li>
            ✅ <code>no-useless-catch</code> — 불필요한 <code>catch</code>{" "}
            절 금지
          </li>
          <li>
            🔧 ❄️ <code>no-useless-computed-key</code> — 객체와 클래스에서
            불필요한 계산된 속성 키 금지
          </li>
          <li>
            ❄️ <code>no-useless-concat</code> — 리터럴 또는 템플릿 리터럴의
            불필요한 연결 금지
          </li>
          <li>
            <code>no-useless-constructor</code> — 불필요한 생성자 금지
          </li>
          <li>
            ✅ 💡 <code>no-useless-escape</code> — 불필요한 이스케이프 문자
            금지
          </li>
          <li>
            🔧 <code>no-useless-rename</code> — import, export, 구조 분해
            할당을 같은 이름으로 변경 금지
          </li>
          <li>
            🔧 <code>no-useless-return</code> — 중복된 return 문 금지
          </li>
          <li>
            🔧 <code>no-var</code> — <code>var</code> 대신 <code>let</code>{" "}
            또는 <code>const</code> 강제
          </li>
          <li>
            ❄️ <code>no-void</code> — <code>void</code> 연산자 금지
          </li>
          <li>
            ❄️ <code>no-warning-comments</code> — 주석에서 지정한 경고 용어
            금지
          </li>
          <li>
            ✅ <code>no-with</code> — <code>with</code> 문 금지
          </li>
          <li>
            🔧 ❄️ <code>object-shorthand</code> — 객체 리터럴에서 메서드 및
            속성 단축 구문 강제 또는 금지
          </li>
          <li>
            🔧 ❄️ <code>one-var</code> — 함수에서 변수를 함께 또는 별도로
            선언 강제
          </li>
          <li>
            🔧 ❄️ <code>operator-assignment</code> — 가능한 경우 할당 연산자
            단축형 강제 또는 금지
          </li>
          <li>
            🔧 ❄️ <code>prefer-arrow-callback</code> — 콜백에 화살표 함수
            사용 강제
          </li>
          <li>
            🔧 <code>prefer-const</code> — 선언 후 재할당되지 않는 변수에{" "}
            <code>const</code> 선언 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-destructuring</code> — 배열 및/또는 객체에서
            구조 분해 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-exponentiation-operator</code> —{" "}
            <code>Math.pow</code> 대신 <code>**</code> 연산자 사용 강제
          </li>
          <li>
            💡 <code>prefer-named-capture-group</code> — 정규식에서 이름 있는
            캡처 그룹 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-numeric-literals</code> — 2진, 8진, 16진
            리터럴을 위해 <code>parseInt()</code> 및{" "}
            <code>Number.parseInt()</code> 금지
          </li>
          <li>
            🔧 <code>prefer-object-has-own</code> —{" "}
            <code>Object.prototype.hasOwnProperty.call()</code> 대신{" "}
            <code>Object.hasOwn()</code> 사용 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-object-spread</code> — 첫 번째 인수로 객체
            리터럴을 사용하는 <code>Object.assign</code> 금지, 객체 스프레드
            사용 강제
          </li>
          <li>
            <code>prefer-promise-reject-errors</code> — Promise 거부 사유로
            Error 객체 사용 강제
          </li>
          <li>
            💡 <code>prefer-regex-literals</code> — 정규식 리터럴을 위해{" "}
            <code>RegExp</code> 생성자 금지
          </li>
          <li>
            <code>prefer-rest-params</code> — <code>arguments</code> 대신
            rest 매개변수 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-spread</code> — <code>.apply()</code> 대신
            스프레드 연산자 강제
          </li>
          <li>
            🔧 ❄️ <code>prefer-template</code> — 문자열 연결 대신 템플릿
            리터럴 강제
          </li>
          <li>
            💡 <code>preserve-caught-error</code> — 커스텀 에러 재발생 시
            원래 캐치된 에러 손실 금지
          </li>
          <li>
            💡 <code>radix</code> — <code>parseInt()</code> 사용 시
            기수(radix) 인수 강제
          </li>
          <li>
            <code>require-await</code> — <code>await</code> 표현식이 없는
            async 함수 금지
          </li>
          <li>
            💡 <code>require-unicode-regexp</code> — 정규식에 <code>u</code>{" "}
            또는 <code>v</code> 플래그 강제
          </li>
          <li>
            ✅ <code>require-yield</code> — 제너레이터 함수에{" "}
            <code>yield</code> 포함 강제
          </li>
          <li>
            🔧 💡 ❄️ <code>sort-imports</code> — 모듈 내 정렬된{" "}
            <code>import</code> 선언 강제
          </li>
          <li>
            ❄️ <code>sort-keys</code> — 객체 키 정렬 강제
          </li>
          <li>
            🔧 ❄️ <code>sort-vars</code> — 동일한 선언 블록 내 변수 정렬
            강제
          </li>
          <li>
            🔧 <code>strict</code> — strict 모드 지시어 강제 또는 금지
          </li>
          <li>
            💡 <code>symbol-description</code> — Symbol 설명 강제
          </li>
          <li>
            ❄️ <code>vars-on-top</code> — <code>var</code> 선언을 포함 스코프
            맨 위에 배치 강제
          </li>
          <li>
            🔧 ❄️ <code>yoda</code> — "Yoda" 조건 강제 또는 금지
          </li>
        </ul>

        {/* ──────────────────────────────────────────
            3. Layout & Formatting
        ────────────────────────────────────────── */}
        <h2>Layout &amp; Formatting</h2>
        <p>코드의 실행 방식보다 코드의 외형과 관련된 규칙들입니다.</p>
        <ul>
          <li>
            🔧 <code>unicode-bom</code> — 유니코드 BOM(바이트 순서 표시)
            강제 또는 금지
          </li>
        </ul>

        {/* ──────────────────────────────────────────
            4. Deprecated
        ────────────────────────────────────────── */}
        <h2>Deprecated (더 이상 사용하지 않는 규칙)</h2>
        <p>
          아래 규칙들은{" "}
          <a
            href="https://eslint.org/docs/latest/use/rule-deprecation"
            target="_blank"
            rel="noreferrer"
          >
            사용 중단 정책
          </a>
          에 따라 더 이상 사용되지 않으며, 새로운 규칙으로 대체되었습니다.
          대부분의 서식 관련 규칙은 <code>@stylistic/eslint-plugin</code>으로,
          Node.js 관련 규칙은 <code>eslint-plugin-n</code>으로 이동되었습니다.
        </p>
        <ul>
          <li><code>array-bracket-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>array-bracket-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>array-element-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>arrow-parens</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>arrow-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>block-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>brace-style</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>callback-return</code> → <code>eslint-plugin-n</code></li>
          <li><code>comma-dangle</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>comma-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>comma-style</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>computed-property-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>dot-location</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>eol-last</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>func-call-spacing</code> → <code>function-call-spacing</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>function-call-argument-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>function-paren-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>generator-star-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>global-require</code> → <code>eslint-plugin-n</code></li>
          <li><code>handle-callback-err</code> → <code>eslint-plugin-n</code></li>
          <li><code>id-blacklist</code> → <code>id-denylist</code></li>
          <li><code>implicit-arrow-linebreak</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>indent</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>indent-legacy</code> → <code>indent</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>jsx-quotes</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>key-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>keyword-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>line-comment-position</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>linebreak-style</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>lines-around-comment</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>lines-around-directive</code> → <code>padding-line-between-statements</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>lines-between-class-members</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>max-len</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>max-statements-per-line</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>multiline-comment-style</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>multiline-ternary</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>new-parens</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>newline-after-var</code> → <code>padding-line-between-statements</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>newline-before-return</code> → <code>padding-line-between-statements</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>newline-per-chained-call</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-buffer-constructor</code> → <code>no-deprecated-api</code> in <code>eslint-plugin-n</code></li>
          <li><code>no-catch-shadow</code> → <code>no-shadow</code></li>
          <li><code>no-confusing-arrow</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-extra-parens</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-extra-semi</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-floating-decimal</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-mixed-operators</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-mixed-requires</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-mixed-spaces-and-tabs</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-multi-spaces</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-multiple-empty-lines</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-native-reassign</code> → <code>no-global-assign</code></li>
          <li><code>no-negated-in-lhs</code> → <code>no-unsafe-negation</code></li>
          <li><code>no-new-object</code> → <code>no-object-constructor</code></li>
          <li><code>no-new-require</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-new-symbol</code> → <code>no-new-native-nonconstructor</code></li>
          <li><code>no-path-concat</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-process-env</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-process-exit</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-restricted-modules</code> → <code>no-restricted-require</code> in <code>eslint-plugin-n</code></li>
          <li><code>no-return-await</code> — 대체 규칙 없음</li>
          <li><code>no-spaced-func</code> → <code>function-call-spacing</code> in <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-sync</code> → <code>eslint-plugin-n</code></li>
          <li><code>no-tabs</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-trailing-spaces</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>no-whitespace-before-property</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>nonblock-statement-body-position</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>object-curly-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>object-curly-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>object-property-newline</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>one-var-declaration-per-line</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>operator-linebreak</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>padded-blocks</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>padding-line-between-statements</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>prefer-reflect</code> — 대체 규칙 없음</li>
          <li><code>quote-props</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>quotes</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>rest-spread-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>semi</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>semi-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>semi-style</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>space-before-blocks</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>space-before-function-paren</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>space-in-parens</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>space-infix-ops</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>space-unary-ops</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>spaced-comment</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>switch-colon-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>template-curly-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>template-tag-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>wrap-iife</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>wrap-regex</code> → <code>@stylistic/eslint-plugin</code></li>
          <li><code>yield-star-spacing</code> → <code>@stylistic/eslint-plugin</code></li>
        </ul>

        {/* ──────────────────────────────────────────
            5. Removed
        ────────────────────────────────────────── */}
        <h2>Removed (제거된 규칙)</h2>
        <p>
          사용 중단 정책이 만들어지기 전, 구버전 ESLint에서 새 규칙으로 대체된
          규칙들입니다.
        </p>
        <ul>
          <li><code>generator-star</code> → <code>generator-star-spacing</code></li>
          <li><code>global-strict</code> → <code>strict</code></li>
          <li><code>no-arrow-condition</code> → <code>no-confusing-arrow</code> 또는 <code>no-constant-condition</code></li>
          <li><code>no-comma-dangle</code> → <code>comma-dangle</code></li>
          <li><code>no-empty-class</code> → <code>no-empty-character-class</code></li>
          <li><code>no-empty-label</code> → <code>no-labels</code></li>
          <li><code>no-extra-strict</code> → <code>strict</code></li>
          <li><code>no-reserved-keys</code> → <code>quote-props</code></li>
          <li><code>no-space-before-semi</code> → <code>semi-spacing</code></li>
          <li><code>no-wrap-func</code> → <code>no-extra-parens</code></li>
          <li><code>space-after-function-name</code> → <code>space-before-function-paren</code></li>
          <li><code>space-after-keywords</code> → <code>keyword-spacing</code></li>
          <li><code>space-before-function-parentheses</code> → <code>space-before-function-paren</code></li>
          <li><code>space-before-keywords</code> → <code>keyword-spacing</code></li>
          <li><code>space-in-brackets</code> → <code>object-curly-spacing</code> 또는 <code>array-bracket-spacing</code> 또는 <code>computed-property-spacing</code></li>
          <li><code>space-return-throw-case</code> → <code>keyword-spacing</code></li>
          <li><code>space-unary-word-ops</code> → <code>space-unary-ops</code></li>
          <li><code>spaced-line-comment</code> → <code>spaced-comment</code></li>
          <li><code>valid-jsdoc</code> — 제거됨</li>
          <li><code>require-jsdoc</code> — 제거됨</li>
        </ul>

        <nav className="doc-nav">
          <NavLink to="/command-line-interface" className="doc-nav-btn">
            ← 이전
          </NavLink>
          <NavLink to="/mcp" className="doc-nav-btn next">
            다음 →
          </NavLink>
        </nav>
      </article>
    </div>
  );
}