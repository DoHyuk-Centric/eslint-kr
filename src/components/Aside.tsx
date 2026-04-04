import { NavLink } from "react-router-dom";

export function Aside(){
    return(
        <aside className="sidebar">
            <div className="sidebar-section">
            <div className="sidebar-section-title">시작하기</div>
            <NavLink to="/" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>홈</NavLink>
            <NavLink to="/intro" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>ESLint란?</NavLink>
            <NavLink to="/install" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>설치하기</NavLink>
            <NavLink to="/setting" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>설정</NavLink>
            </div>
            <div className="sidebar-section">
            <div className="sidebar-section-title">핵심 개념</div>
             <NavLink to="/rules" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>규칙 (Rules)</NavLink>
             <NavLink to="/settingFile" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>설정 파일</NavLink>
             <NavLink to="/parser" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>파서 (Parser)</NavLink>
             <NavLink to="/plugin" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>플러그인 (Plugin)</NavLink>
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