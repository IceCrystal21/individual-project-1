import React, { useState } from 'react'
import styles from "./CSS_modules/Navbar.module.css"

const Navbar = () => {

    const [activePage, setPage] = useState("Home")

    return (
        <nav>
            <ul>
                <li><a href='#' onClick={() => setPage("Home")}>Home</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;