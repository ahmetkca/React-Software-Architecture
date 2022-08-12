import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                </ul>
            </nav>
            <hr/>
            <Outlet />
        </div>
    );
}