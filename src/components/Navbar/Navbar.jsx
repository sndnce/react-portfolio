import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
        </a>
        <div className={styles.menu}>
            <img
                className={styles.menuBtn}
                src={menuOpen ? "/menuIcon.png" : "/menuIcon.png"}
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a style={{ color:"#bc23f2"}}href="#about">About</a>
                    </li>
                    <li>
                        <a style= {{ color: "#a92ce3"}} href="#projects"> Projects</a>
                    </li>
                    <li>
                        <a style={{ color: "#8731e9"}} href="#skills">Skills</a>
                    </li>
                    <li>
                        <a style={{ color: "#6730d3"}} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
    </nav>
    );
};