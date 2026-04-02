import { Link } from "react-router-dom";

export function Main() {
  return (
    <>
      {/* 히어로 */}
      <section className="hero">
        <h1>ESLint 한국어 가이드</h1>
        <p>
          ESLint 공식 사이트에는 한국어가 없습니다.
          <br />이 사이트는 한국 개발자를 위해 커뮤니티가 직접 만든 실전
          가이드입니다.
        </p>
        <div className="hero-btns">
          <Link to="/intro" className="btn btn-primary">
            시작하기
          </Link>
          <a
            href="https://github.com/DoHyuk-Centric/eslint-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub에서 기여하기
          </a>
        </div>
      </section>

      {/* 안내 */}
      <div className="notice">
        ⚠️ 이 프로젝트는 현재 초기 단계입니다. 문서가 작성 중인 항목이
        많습니다.{" "}
        <a href="#">기여 가이드</a>를 읽고 함께 만들어 주세요!
      </div>

      {/* 시작하기 */}
      <section className="docs-section">
        <h2>시작하기</h2>
        <div className="card-grid">
          <Link to="/intro" className="card">
            <div className="card-num">01</div>
            <div className="card-title">ESLint란?</div>
            <div className="card-desc">
              ESLint의 개념, 왜 써야 하는지, Prettier와의 차이
            </div>
          </Link>
          <Link to="/install" className="card">
            <div className="card-num">02</div>
            <div className="card-title">설치하기</div>
            <div className="card-desc">
              ESLint 설치부터 초기설정, 빠르게 시작하기
            </div>
          </Link>
          <Link to="/setting" className="card">
            <div className="card-num">03</div>
            <div className="card-title">첫 설정</div>
            <div className="card-desc">
              eslint.config.mjs 파일 처음 만들어보기
            </div>
          </Link>
        </div>
      </section>

      {/* 핵심 개념 */}
      <section className="docs-section" style={{ paddingTop: 0 }}>
        <h2>핵심 개념</h2>
        <div className="card-grid">
          <Link to="/rules" className="card">
            <div className="card-num">04</div>
            <div className="card-title">규칙 (Rules)</div>
            <div className="card-desc">실무에서 꼭 알아야 할 규칙 모음</div>
          </Link>
          <Link to="/settingFile" className="card">
            <div className="card-num">05</div>
            <div className="card-title">설정 파일 완전 정복</div>
            <div className="card-desc">
              extends, plugins, env 개념 완전 이해
            </div>
          </Link>
          <a href="#" className="card disabled">
            <div className="card-num">06</div>
            <div className="card-title">플러그인 활용</div>
            <div className="card-desc">
              React, TypeScript 플러그인 실전 적용
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
