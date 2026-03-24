export function Aside(){
    return(
        <aside className="sidebar">
            <div className="sidebar-section">
            <div className="sidebar-section-title">시작하기</div>
            <a href="index.html" className="sidebar-link active">홈</a>
            <a href="docs/getting-started/01-intro.html" className="sidebar-link">ESLint란?</a>
            <a href="docs/getting-started/02-installation.html" className="sidebar-link disabled">설치하기 <span className="badge-wip">작성 중</span></a>
            <a href="docs/getting-started/03-first-config.html" className="sidebar-link disabled">첫 설정 <span className="badge-wip">작성 중</span></a>
            </div>
            <div className="sidebar-section">
            <div className="sidebar-section-title">핵심 개념</div>
            <a href="#" className="sidebar-link disabled">규칙 (Rules) <span className="badge-wip">작성 중</span></a>
            <a href="#" className="sidebar-link disabled">설정 파일 <span className="badge-wip">작성 중</span></a>
            <a href="#" className="sidebar-link disabled">파서 (Parser) <span className="badge-wip">작성 중</span></a>
            <a href="#" className="sidebar-link disabled">플러그인 <span className="badge-wip">작성 중</span></a>
            </div>
            <div className="sidebar-section">
            <div className="sidebar-section-title">실전 가이드</div>
            <a href="#" className="sidebar-link disabled">React 프로젝트 <span className="badge-wip">작성 중</span></a>
            <a href="#" className="sidebar-link disabled">TypeScript 설정 <span className="badge-wip">작성 중</span></a>
            <a href="#" className="sidebar-link disabled">Prettier와 함께 쓰기 <span className="badge-wip">작성 중</span></a>
            </div>
            <div className="sidebar-section">
            <div className="sidebar-section-title">기여하기</div>
            <a href="#" className="sidebar-link">기여 가이드</a>
            <a href="#" className="sidebar-link">용어 통일 기준</a>
            </div>
        </aside>
    )
}