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
             <NavLink to="/prettier" className={({ isActive }) => "sidebar-link" + (isActive ? " active" : "")} end>Prettier와 함께 쓰기</NavLink>
            </div>
            <div className="sidebar-section">
                <div className="sidebar-section-title">기여하기</div>
                <a href="#" className="sidebar-link">기여 가이드</a>
            </div>
        </aside>
    )
}