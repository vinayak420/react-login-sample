import React from "react";
import ReactDom from "react-dom"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        <h4>app</h4>
                    </Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="/">Login</a>
                    </li>
                    <li>
                        <a href="/register" >Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar