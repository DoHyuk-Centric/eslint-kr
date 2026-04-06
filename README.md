# ESLint 한국어 가이드

> ESLint 공식 사이트에는 한국어가 없습니다.  
> 이 프로젝트는 **한국 개발자를 위해 커뮤니티가 직접 만드는 실전 가이드 사이트**입니다.

🌐 **사이트 바로가기 → [dohyuk-centric.github.io/eslint-kr](https://dohyuk-centric.github.io/eslint-kr/)**

> ⚠️ 현재 초기 단계입니다. 작성 중인 문서가 많으니, 함께 만들어 주세요!

---

## 📖 프로젝트 소개

ESLint 공식 문서는 영어로만 제공됩니다. 이 프로젝트는 한국 개발자들이 ESLint를 더 쉽게 이해하고 실무에 적용할 수 있도록 **커뮤니티 주도로 만들어가는 한국어 가이드 사이트**입니다.

초급자를 위한 입문부터 고급 사용자를 위한 심화 내용까지, 실제 코드 예시와 함께 구성되어 있습니다.

### 현재 제공되는 문서

| 경로 | 페이지 | 내용 |
|------|--------|------|
| `/intro` | ESLint란? | ESLint 개념, 왜 써야 하는지, Prettier와의 차이 |
| `/install` | 설치하기 | npm / yarn / pnpm / bun 별 설치, VS Code 연동 |
| `/setting` | 첫 설정 | `eslint.config.mjs` 기초 설정 가이드 |
| `/rules` | 규칙 (Rules) | 실무에서 꼭 알아야 할 규칙 5개 카테고리 |
| `/rulesReference` | Rules 레퍼런스 | 전체 규칙 목록 (✅ Recommended, 🔧 Fixable 등) |
| `/settingFile` | 설정 파일 완전 정복 | Flat Config vs Legacy Config 비교 |
| `/parser` | 파서 (Parser) | AST 개념, 커스텀 파서 사용법 |

> 이 사이트의 모든 규칙 설명과 예시 코드는 **ESLint v9 Flat Config** 기준으로 작성되었습니다.

---

## 🛠 기술 스택

| 항목 | 버전 |
|------|------|
| React | 19.2.4 |
| React Router DOM | 7.13.2 |
| TypeScript | 5.9.3 |
| Vite | 8.0.1 |
| ESLint | 9.39.4 |
| 폰트 | Noto Sans KR, JetBrains Mono |
| 배포 | GitHub Pages (`main` 브랜치 자동 배포) |
| 라이선스 | MIT |

> **React Compiler** (`babel-plugin-react-compiler`)가 활성화되어 있습니다.  
> 불필요한 re-render를 자동으로 최적화하며, 빌드 시간이 다소 길어질 수 있습니다.

---

## 🚀 로컬 실행 방법

```bash
# 1. 저장소 클론
git clone https://github.com/DoHyuk-Centric/eslint-kr.git
cd eslint-kr

# 2. develop 브랜치로 전환 (개발 브랜치)
git checkout develop

# 3. 의존성 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 기타 스크립트

```bash
npm run build    # 프로덕션 빌드 (tsc -b && vite build)
npm run preview  # 빌드 결과물 로컬 미리보기
npm run lint     # ESLint 검사
```

---

## 📁 프로젝트 구조

```
eslint-kr/
├── src/
│   ├── main.tsx                  # 진입점
│   ├── App.tsx                   # 라우팅 정의 (React Router DOM v7)
│   ├── index.css                 # 전역 스타일 및 CSS 변수
│   ├── components/
│   │   ├── Layout.tsx            # 전체 레이아웃 wrapper
│   │   ├── Header.tsx            # 헤더
│   │   ├── Footer.tsx            # 푸터
│   │   ├── Aside.tsx             # 사이드바 네비게이션
│   │   ├── Navigation.tsx        # 헤더 네비게이션
│   │   ├── Main.tsx              # 랜딩 페이지
│   │   ├── Search.tsx            # 검색창
│   │   ├── Logo.tsx              # 로고
│   │   └── ui/
│   │       └── CodeBlock.tsx     # 패키지 매니저 탭 코드 블록
│   ├── pages/
│   │   ├── Intro.tsx             # ESLint 소개
│   │   ├── Install.tsx           # 설치 가이드
│   │   ├── Setting.tsx           # 기초 설정
│   │   ├── Rules.tsx             # 규칙 가이드
│   │   ├── RulesReference.tsx    # 규칙 레퍼런스 목록
│   │   ├── SettingFile.tsx       # 설정 파일 상세 가이드
│   │   └── Parser.tsx            # 파서 설명
│   └── css/
│       └── components.css        # 컴포넌트 스타일
├── public/                       # 정적 파일
├── .github/
│   └── ISSUE_TEMPLATE/           # 이슈 템플릿 3종
├── index.html                    # SPA 진입점
├── vite.config.ts
├── eslint.config.js
├── tsconfig.json
└── CODE_REVIEW.md                # 코드 리뷰 문서 (개선 항목 포함)
```

---

## 🌿 브랜치 전략

| 브랜치 | 역할 |
|--------|------|
| `main` | GitHub Pages 배포 브랜치. 직접 커밋하지 않습니다. |
| `develop` | 개발 기본 브랜치. 모든 PR의 병합 대상입니다. |
| `docs/*` | 문서 작성 및 번역 작업 |
| `fix/*` | 버그 수정 |
| `feat/*` | 신규 기능 개발 |

> `develop` → `main` 머지 시 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

---

## 🤝 기여하기

이 프로젝트는 **누구나 기여할 수 있습니다!**  
문서 번역, 내용 추가, 오탈자 수정, 코드 개선 등 모든 형태의 참여를 환영합니다.

### 기여 흐름

```bash
# 1. 저장소를 Fork한 뒤 클론
git clone https://github.com/<your-username>/eslint-kr.git
cd eslint-kr

# 2. develop 기반으로 작업 브랜치 생성
git checkout develop
git checkout -b docs/페이지명

# 3. 작업 후 커밋
#    커밋 메시지는 type: 내용 형식을 따릅니다
#    type 예시: docs | fix | feat | style | refactor
git commit -m "docs: 설치 가이드 npm 섹션 보완"

# 4. Push 후 PR 오픈 (대상 브랜치: develop)
git push origin docs/페이지명
```

### 이슈 등록

`.github/ISSUE_TEMPLATE`에 세 가지 템플릿이 준비되어 있습니다.

| 템플릿 | 용도 |
|--------|------|
| `bug_report` | 사이트 오류 또는 잘못된 내용 신고 |
| `feature_request` | 새로운 기능·페이지 제안 |
| `docs_translation` | 문서 번역 및 작성 요청 |

> ✋ Blank Issue는 비활성화되어 있습니다. 반드시 템플릿 중 하나를 선택해 주세요.

### 기여 전 필독

- `CODE_REVIEW.md` — 전체 코드 품질 검토 결과와 P0~P3 개선 항목이 정리되어 있습니다. PR 전 반드시 확인해 주세요.
- **용어 통일 기준** — 문서 내 한국어 번역 용어를 일관되게 유지하기 위한 기준표입니다. 새 문서 작성 시 참고해 주세요.

---

## 📄 라이선스

[MIT License](LICENSE)

---

<p align="center">ESLint-KO · 커뮤니티 한국어 가이드</p>
