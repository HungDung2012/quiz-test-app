import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";

function LayoutDefault() {
    const token = getCookie("token");

    const isLogin = useSelector(state => state.loginReducer)

    console.log(isLogin);

    const navLinkActive = (e) => {
        return e.isActive ? "menu__link menu__link--active" : "menu__link";
    }
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <NavLink to="/" className="menu__linkLogo">Quiz</NavLink>
                    </div>
                    {token && (
                        <div className="menu-header">
                            <li>
                                <NavLink to="/" className={navLinkActive}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/topic" className={navLinkActive}>Topic</NavLink>
                            </li>
                            <li>
                                <NavLink to="/answer" className={navLinkActive}>Answer</NavLink>
                            </li>
                        </div>
                    )}

                    <div className="layout-default__account">
                        {token ? (<>
                            <NavLink to="/logout" className={navLinkActive}>Log out</NavLink>
                        </>) : (<>
                            <li>
                                <NavLink to="/login" className={navLinkActive}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={navLinkActive}>Register</NavLink>
                            </li>
                        </>)}
                    </div>

                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    Copyright @2025 by dungch
                </footer>
            </div>
        </>
    )
}

export default LayoutDefault