'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
                <div className={styles.burgerLine}></div>
            </div>
            <ul className={`${styles.navLinks} ${showMenu ? styles.showMenu : ''}`}>
                <li>
                    <Link href="/">
                        <div className={styles.menuItem} onClick={toggleMenu}>
                            Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/all-projects">
                        <div className={styles.menuItem} onClick={toggleMenu}>
                            Projects
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/contact-me">
                        <div className={styles.menuItem} onClick={toggleMenu}>
                            Contact Me
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
