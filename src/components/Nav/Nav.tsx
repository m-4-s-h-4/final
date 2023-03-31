'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <nav>
            <button className={styles.menuButton} onClick={handleMenuToggle} style={{ backgroundColor: 'transparent', border: 'none' }}>
                {isMenuOpen ? <FontAwesomeIcon icon={faTimes} className={styles.menuIcon} /> : <FontAwesomeIcon icon={faBars} className={styles.menuIcon} />}
            </button>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <Link href="/">
                        <div className={styles.menuItem}>
                            Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/all-projects">
                        <div className={styles.menuItem}>
                            Projects
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/contact-me">
                        <div className={styles.menuItem}>
                            Contact Me
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
