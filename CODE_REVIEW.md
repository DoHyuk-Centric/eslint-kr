# ESLint-KR 코드 리뷰

> 리뷰 날짜: 2026-04-03
> 대상 브랜치: `develop`
> 리뷰어: Claude Code (claude-sonnet-4-6)

---

## 1. 프로젝트 개요

ESLint-KR은 ESLint 공식 문서의 한국어 커뮤니티 가이드 웹사이트입니다.
React 19, TypeScript, Vite, React Router DOM 기반의 SPA로 구성되어 있으며, ESLint에 대한 초급자부터 고급 사용자까지를 대상으로 교육 콘텐츠를 제공합니다.

**핵심 정보:**

| 항목 | 내용 |
|------|------|
| React | 19.2.4 |
| React Router DOM | 7.13.2 |
| TypeScript | 5.9.3 |
| Vite | 8.0.1 |
| 라이선스 | MIT |

---

## 2. 프로젝트 구조 분석

```
eslint-kr/
├── src/
│   ├── main.tsx              # 진입점
│   ├── App.tsx               # 라우팅 정의
│   ├── index.css             # 전역 스타일
│   ├── App.css               # ⚠️ 비어있음 (불필요)
│   ├── components/
│   │   ├── Layout.tsx        # 전체 레이아웃 wrapper
│   │   ├── Header.tsx        # 헤더
│   │   ├── Footer.tsx        # 푸터
│   │   ├── Aside.tsx         # 사이드바 네비게이션
│   │   ├── Navigation.tsx    # 헤더 네비게이션
│   │   ├── Main.tsx          # 랜딩 페이지
│   │   ├── Search.tsx        # 검색창 (기능 미구현)
│   │   ├── Logo.tsx          # 로고
│   │   └── ui/
│   │       └── CodeBlock.tsx # 코드 블록 (탭 기능)
│   ├── pages/
│   │   ├── Intro.tsx         # ESLint 소개
│   │   ├── Install.tsx       # 설치 가이드
│   │   ├── Setting.tsx       # 기초 설정
│   │   ├── Rules.tsx         # 규칙 가이드
│   │   ├── RulesReference.tsx # 규칙 레퍼런스 목록
│   │   ├── SettingFile.tsx   # 설정 파일 상세 가이드
│   │   ├── Parser.tsx        # 파서 설명
│   │   └── Configuration.tsx # ⚠️ 라우트 미등록, 레이아웃 없음
│   └── css/
│       └── components.css    # 컴포넌트 스타일
├── .github/
│   └── ISSUE_TEMPLATE/       # 이슈 템플릿
├── package.json
├── vite.config.ts
└── README.md
```

**구조 평가:**
- ✅ 컴포넌트와 페이지를 명확히 분리
- ✅ 일관된 파일 명명 규칙 (PascalCase)
- ⚠️ `App.css`가 사실상 비어있어 삭제 필요
- ⚠️ 공통 유틸리티/훅 폴더 없음 → 코드 중복 발생

---

## 3. 아키텍처 및 설계 방향성

### 3.1 라우팅 구조

**`src/App.tsx` 정의된 경로:**

```
/              → Main
/intro         → Intro
/install       → Install
/setting       → Setting
/rules         → Rules
/rulesReference → RulesReference
/settingFile   → SettingFile
/parser        → Parser
```

### 3.2 라우팅 불일치 문제

| 위치 | 경로 | 문제 |
|------|------|------|
| `Navigation.tsx:8` | `/plugins` | 라우트 미정의 → 404 |
| `SettingFile.tsx:197` | `/Configuration` | 라우트 미정의, 대문자 C |
| `RulesReference.tsx:947` | `/command-line-interface` | 라우트 미정의 |
| `RulesReference.tsx:952` | `/mcp` | 라우트 미정의 |
| `Aside.tsx:18,22,28` | `#` | 페이지 상단 이동 부작용 |
| `Footer.tsx:10` | `#` | 미구현 |
| `Main.tsx:33,87` | `#` | 미구현 |

**개선 제안 — 경로 상수화:**

```typescript
// src/config/routes.ts
export const ROUTES = {
  HOME: '/',
  INTRO: '/intro',
  INSTALL: '/install',
  SETTING: '/setting',
  RULES: '/rules',
  RULES_REFERENCE: '/rules-reference',
  SETTING_FILE: '/setting-file',
  PARSER: '/parser',
  CONFIGURATION: '/configuration',
} as const;
```

---

## 4. 컴포넌트별 리뷰

### 4.1 Layout.tsx ✅ 양호

```typescript
export default function Layout() {
  return (
    <>
      <Header />
      <div className="layout">
        <Aside />
        <main><Outlet /></main>
      </div>
      <Footer />
    </>
  );
}
```

- `<main>` 태그 올바르게 사용 (접근성 good)
- 구조가 단순하고 명확

---

### 4.2 Logo.tsx ⚠️ 소폭 개선 필요

**현재:**
```typescript
<a href="/" className="site-logo">ESLint<span>-KR</span></a>
```

**문제:** `<a href>` 대신 React Router의 `<Link>`를 사용해야 일관성 유지

**개선:**
```typescript
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="site-logo">
      ESLint<span>-KR</span>
    </Link>
  );
}
```

---

### 4.3 Navigation.tsx ❌ 수정 필요

**현재:**
```typescript
<NavLink to="/plugins">플러그인</NavLink>
<NavLink to="https://github.com/DoHyuk-Centric/eslint-kr">GitHub</NavLink>
```

**문제:**
1. `/plugins` 경로가 정의되지 않음
2. 외부 URL을 `<NavLink>`로 처리 → `<a>` 태그 사용해야 함

**개선:**
```typescript
export function Navigation() {
  return (
    <nav className="header-nav">
      <NavLink to="/">가이드</NavLink>
      <NavLink to="/rules">Rules 레퍼런스</NavLink>
      {/* /plugins — 작업 중이므로 준비 전까지 주석 처리 */}
      <a
        href="https://github.com/DoHyuk-Centric/eslint-kr"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link"
      >
        GitHub
      </a>
    </nav>
  );
}
```

---

### 4.4 Search.tsx ❌ 기능 미구현

**현재:**
```typescript
export function Search() {
  return (
    <div className="header-search">
      <input type="text" placeholder="문서 검색" />
    </div>
  );
}
```

**문제:**
- `onChange` 핸들러 없음 → 입력해도 아무 일도 없음
- `<label>` 없음 → 스크린 리더 접근성 문제

**선택지:**
1. 기능을 구현하거나
2. 구현 전까지 컴포넌트를 숨기거나 제거

---

### 4.5 Aside.tsx ⚠️ 개선 필요

**문제:**
```typescript
<a href="#" className="sidebar-link disabled">플러그인</a>
```

- `href="#"`은 클릭 시 페이지 상단으로 이동하는 부작용
- 미구현 항목은 `<span>` 또는 `disabled` 속성이 있는 `<button>`으로 대체 권장

**개선:**
```typescript
<span className="sidebar-link disabled">
  플러그인 <span className="badge-wip">작성 중</span>
</span>
```

---

### 4.6 CodeBlock.tsx ✅ 잘 구현됨 / 개선 여지 있음

**장점:**
- TypeScript 타입 명확
- 탭 기능 (npm / yarn / pnpm / bun) 잘 구현됨

**개선 여지:**
- Copy 버튼이 없음 (Install 페이지에서 별도 구현 중)
- ARIA role 부재 (`role="tablist"`, `role="tab"`, `aria-selected`)

**개선안:**
```typescript
<div role="tablist" className="tabs">
  {Object.keys(commands).map((tab) => (
    <button
      key={tab}
      role="tab"
      aria-selected={pm === tab}
      onClick={() => setPm(tab)}
      className={`code-lang ${pm === tab ? "active" : ""}`}
    >
      {tab}
    </button>
  ))}
</div>
```

---

### 4.7 Configuration.tsx ❌ 심각한 문제

- `App.tsx`에 라우트가 등록되지 않음 → 접근 불가
- `<main>` 래퍼 없음 → 다른 페이지와 스타일 전혀 다름
- 이전/다음 네비게이션 없음

**즉시 조치:**
1. `App.tsx`에 라우트 추가: `<Route path="configuration" element={<Configuration />} />`
2. 또는 다른 페이지와 같은 레이아웃 구조 적용

---

## 5. 코드 품질

### 5.1 TypeScript 사용 ✅ 전반적으로 양호

- `strict: true` 설정 (tsconfig.app.json)
- `noUnusedLocals`, `noUnusedParameters` 활성화

**미흡한 점:**
- `error: unknown` 타입 캐스팅 없이 `console.error(error)` 사용 (Intro.tsx, Install.tsx 등)

---

### 5.2 코드 중복 ❌ 해결 필요

아래 copy 로직이 **Intro.tsx, Install.tsx, Setting.tsx** 3곳에서 거의 동일하게 반복됩니다:

```typescript
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(someCode);
    alert("코드가 복사되었습니다.");
  } catch (error) {
    console.error(error);
    alert("복사에 실패했습니다.");
  }
};
```

**해결 — Custom Hook 추출:**

```typescript
// src/hooks/useCopyToClipboard.ts
import { useState } from "react";

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err instanceof Error ? err.message : err);
    }
  };

  return { copy, copied };
}
```

---

### 5.3 alert() 사용 ⚠️ 개선 권장

`alert()`는 브라우저 기본 대화상자로, UX가 좋지 않습니다.
Install.tsx는 이미 toast 방식을 사용하고 있으므로 나머지 페이지도 동일하게 통일해야 합니다.

---

### 5.4 오타

- `src/pages/Rules.tsx:839` — `"codeRules Reference"` → `"Rules Reference"` 로 수정 필요

---

## 6. CSS/스타일 리뷰

### 6.1 CSS 변수 ✅ 잘 활용됨

```css
:root {
  --color-primary:       #3d73d6;
  --color-primary-hover: #2b5cb8;
  --color-text:          #1b1b1b;
  --sidebar-width:       260px;
  --header-height:       52px;
  --font:                'Noto Sans KR', sans-serif;
  --font-mono:           'JetBrains Mono', monospace;
}
```

**추가 권장 변수:**
```css
:root {
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --radius-sm: 4px;
  --radius-md: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
}
```

---

### 6.2 반응형 디자인 ⚠️ 부분적

| 브레이크포인트 | 대응 여부 |
|---|---|
| 1100px 이하 | TOC 숨김만 |
| 768px 이하 | 사이드바 숨김, 레이아웃 변경 |
| 480px 이하 (소형 모바일) | ❌ 미대응 |
| 태블릿 768~1100px | ❌ 미흡 |

---

### 6.3 App.css ⚠️ 삭제 권장

`src/App.css`는 사실상 비어있어 불필요합니다.
`src/main.tsx`에서 import하고 있으므로 파일 삭제 시 import도 함께 제거해야 합니다.

---

## 7. 문서 콘텐츠 리뷰

### 7.1 전체 콘텐츠 평가 ✅ 매우 충실

| 페이지 | 완성도 | 비고 |
|--------|--------|------|
| Intro.tsx | ✅ 9/10 | 초급자 친화적, 코드 예시 풍부 |
| Install.tsx | ✅ 8/10 | 패키지 매니저별 설명 상세 |
| Setting.tsx | ✅ 8/10 | 기초 설정 가이드 명확 |
| Rules.tsx | ✅ 9/10 | 5개 카테고리, 예시 풍부 |
| RulesReference.tsx | ✅ 9/10 | 규칙 목록 포괄적, emoji 활용 좋음 |
| SettingFile.tsx | ✅ 8/10 | Flat Config vs Legacy 비교 좋음 |
| Parser.tsx | ✅ 7/10 | AST 설명 있음, 심화 예시 부족 |
| Configuration.tsx | ⚠️ 5/10 | 레이아웃 없음, 라우트 미등록 |

---

### 7.2 콘텐츠 정확성

- ESLint 규칙 설명과 예시 코드가 실제 ESLint 동작과 일치함
- RulesReference의 emoji 표기 (✅ Recommended, 🔧 Fixable 등) 공식 문서와 동일
- Flat Config 설명이 ESLint v9 기준으로 정확함

---

### 7.3 개선이 필요한 콘텐츠

- **Parser.tsx** — 커스텀 파서 실전 사용 예시 부족
- **RulesReference.tsx:947,952** — 미구현 페이지(`/command-line-interface`, `/mcp`)로 링크

---

## 8. 빌드 환경 및 설정

### 8.1 vite.config.ts ✅ 양호

React Compiler가 활성화되어 있어 불필요한 re-render를 자동으로 최적화합니다.

**개선 제안:**
```typescript
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```
절대 경로 alias를 추가하면 `../../components/...` 같은 상대 경로를 `@/components/...`로 단순화할 수 있습니다.

---

### 8.2 eslint.config.js ⚠️ 개선 여지

현재 TypeScript 타입 기반 규칙이 비활성화되어 있습니다.

```javascript
// 현재
tseslint.configs.recommended

// 타입 기반 규칙 추가
tseslint.configs.recommendedTypeChecked,
// + languageOptions.parserOptions.project 설정
```

---

### 8.3 package.json ⚠️ 타입 버전 불일치

```json
"@types/react-router-dom": "^5.3.3"
```
react-router-dom v7 사용 중이나 타입 패키지가 v5 기준입니다.
react-router-dom v6+ 부터는 자체 타입을 포함하므로 이 패키지를 **삭제**해도 됩니다.

---

## 9. GitHub 기여 환경

### 9.1 Issue Templates ✅ 우수

| 템플릿 | 평가 |
|--------|------|
| bug_report.yml | ✅ 5개 필수 필드, 명확한 가이드 |
| feature_request.yml | ✅ 현재 불편과 제안 해결책 분리 |
| docs_translation.yml | ✅ 6개 카테고리, 구체적 |
| config.yml | ✅ Blank Issue 비활성화, Discussion 유도 |

---

### 9.2 README.md ❌ 개선 필요

현재 README는 Vite 기본 템플릿 내용만 담겨있어 **프로젝트 소개가 전혀 없습니다.**

**최소한 포함해야 할 내용:**
- 프로젝트 설명 (무엇을, 왜)
- 실행 방법 (`npm install && npm run dev`)
- 기여 가이드 (브랜치 전략, PR 방법)
- 라이선스

---

## 10. 개선 우선순위

### P0 — 즉시 수정

| # | 위치 | 문제 |
|---|------|------|
| 1 | `src/pages/Configuration.tsx` | 라우트 미등록, 레이아웃 없음 |
| 2 | `src/App.tsx` | `/plugins`, `/configuration` 경로 처리 |
| 3 | `src/pages/Rules.tsx:839` | 오타: `codeRules Reference` → `Rules Reference` |
| 4 | `src/components/Navigation.tsx:8` | 외부 링크를 `<a>` 태그로 변경 |

### P1 — 1~2주 내

| # | 위치 | 문제 |
|---|------|------|
| 5 | `Intro.tsx`, `Install.tsx`, `Setting.tsx` | Copy 로직 → `useCopyToClipboard` Hook으로 추출 |
| 6 | `src/components/Search.tsx` | 기능 구현 또는 임시 제거 |
| 7 | `src/components/Aside.tsx` | `href="#"` → `<span>` 또는 `disabled button` |
| 8 | `README.md` | 프로젝트 설명 추가 |
| 9 | `package.json` | `@types/react-router-dom` 삭제 |

### P2 — 1개월 내

| # | 위치 | 문제 |
|---|------|------|
| 10 | `src/components/ui/CodeBlock.tsx` | ARIA role 추가, Copy 버튼 옵션 |
| 11 | `src/index.css` | 태블릿/소형 모바일 반응형 추가 |
| 12 | `src/config/routes.ts` (신규) | 경로 상수화로 중앙 관리 |
| 13 | `eslint.config.js` | 타입 기반 규칙 활성화 |
| 14 | `src/App.css` | 삭제 |

### P3 — 장기

- 다크 모드 지원
- 플러그인, Contributing 페이지 작성
- 단위 테스트 추가 (`src/test.js` 현재 비어있음)
- SEO 최적화 (meta tags)
- `@` alias 경로 설정

---

## 11. 총평

### 강점

1. **문서 콘텐츠의 품질이 높습니다.** Rules, RulesReference, SettingFile 페이지는 특히 포괄적이고 정확하며, 초급자도 이해하기 쉽게 잘 작성되었습니다.
2. **기술 스택 선택이 적절합니다.** React 19 + TypeScript + Vite + React Router의 조합은 현대적이고 안정적입니다. React Compiler 사용도 좋은 선택입니다.
3. **GitHub 기여 환경이 잘 구성되어 있습니다.** 특히 `docs_translation.yml` 템플릿은 커뮤니티 문서 프로젝트에 매우 적합합니다.

### 주요 개선 포인트

1. **미완성 연결고리들** — 정의되지 않은 라우트 참조, 작동하지 않는 링크들이 사용자 경험을 저해합니다.
2. **코드 중복** — Copy 로직 등 반복되는 패턴은 Custom Hook으로 추출해야 합니다.
3. **접근성** — ARIA 속성과 키보드 네비게이션이 전반적으로 부족합니다.
4. **README** — 프로젝트의 첫인상인 README가 Vite 기본 템플릿 그대로입니다.

### 최종 점수

| 항목 | 점수 |
|------|------|
| 코드 구조 | 7 / 10 |
| TypeScript 타입 안전성 | 7 / 10 |
| 컴포넌트 재사용성 | 5 / 10 |
| 접근성 (a11y) | 4 / 10 |
| 문서 콘텐츠 품질 | 9 / 10 |
| 완성도 | 6 / 10 |
| CSS/반응형 | 7 / 10 |
| 빌드 환경 | 7 / 10 |
| GitHub 기여 환경 | 8 / 10 |
| **종합** | **6.7 / 10** |

프로젝트는 **커뮤니티 문서 사이트**로서의 핵심 가치인 콘텐츠 품질이 높습니다.
P0/P1 항목을 해결하면 완성도가 빠르게 올라갈 것입니다.
