import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function NavBar() {
    return(
        <div>
            <nav>
                <NavLink to="/"><h1>Go back to Home page</h1></NavLink>
            </nav>
            <Outlet />
        </div>
    )
}