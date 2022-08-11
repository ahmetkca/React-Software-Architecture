import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
    
    return (
        <main>
            <h1>Server-Side Rendering Example</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/articles">Articles</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            
            <Outlet />
        </main>

    )
}

export default Layout;