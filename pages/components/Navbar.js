import React, { useState } from 'react'
import styles from "./CSS_modules/Navbar.module.css"

const Navbar = () => {

    const [activePage, setPage] = useState("Home")

    return (
        <nav className={styles.navbar}>
            <ul className={styles.ul}>
                <li><a href='#' onClick={() => setPage("Home")}>Home</a></li>
                <li><a href='#' onClick={() => setPage("About")}>About</a></li>
                <li><a href='#' onClick={() => setPage("Become a mod")}>Become a moderater</a></li>
                <li><a href='#' onClick={() => setPage("Users")}>Users</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;