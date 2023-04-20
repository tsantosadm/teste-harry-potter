import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className={`${isMenuOpen ? styles.wrapperMenuOpen : ""} ${
                styles.wrapper
            } `}
        >
            <Link
                href="/"
                className={`${isMenuOpen ? styles.imagewrapperMenuOpen : ""} ${
                    styles.imagewrapper
                } `}
            >
                <Image src={logo} alt="Logo" fill></Image>
                Logo
            </Link>
            <div
                className={`${styles.hamburgerMenu} ${
                    isMenuOpen ? styles.hamburgerMenuOpen : ""
                }`}
                onClick={() => setMenuOpen(!isMenuOpen)}
            >
                <p>
                    <Image src={hamburger} alt="Menu"></Image>
                </p>
            </div>
            <div
                className={`${isMenuOpen ? styles.navItemsMenuOpen : ""} ${
                    styles.navItems
                } `}
            >
                <Link href="characters" className={styles.navItem}>
                    <span className={styles.navItemText}>Personagens</span>
                </Link>
                <Link href="/spells" className={styles.navItem}>
                    <span className={styles.navItemText}>Feitiços</span>
                </Link>
                {/* <Link href='/' className={styles.navItem}>
                    <span className={styles.navItemText}>About</span>
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;
