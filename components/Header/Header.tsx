import Link from "next/link";
import { Link as Scroll } from "react-scroll";

// Styles
import styles from "./header.module.scss";

export default function Header() {

    // Handlers
    const handleNavToggle = () => {
        const menu = document.querySelector(`.${styles.mobileNav}`);
        if (menu.classList.contains(styles.open)) {
            menu.classList.remove(styles.open);
            document.body.classList.remove(styles.noscroll)
        } else {
            menu.classList.add(styles.open);
            document.body.classList.add(styles.noscroll)
        }
    }

    type TMenu = {
        mobile?: boolean
    }

    // Subcomponents
    const Menu = ({ mobile }: TMenu) => (
        <>
            <Link href="/projects">
                <a onClick={() => mobile ? handleNavToggle() : null}>Projects</a>
            </Link>
            <Link href="/#skills">
                <a onClick={() => mobile ? handleNavToggle() : null}>Skills</a>
            </Link>
            <Link href="/#about">
                <a onClick={() => mobile ? handleNavToggle() : null}>About</a>
            </Link>
            <Link href="/#contact">
                <a onClick={() => mobile ? handleNavToggle() : null}>Contact</a>
            </Link>
        </>
    )

    const Social = () => (
        <ul className={styles.social}>
            <li>
                <a href="https://github.com/arnovanstaden" target="blank" aria-label="GitHub">
                    <i className="icon-github"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/arnovanstaden/" target="blank" aria-label="LinkedIn">
                    <i className="icon-linkedin"></i>
                </a>
            </li>
            <li className={styles.mail} >
                <a href="mailto:arno@webdacity.dev" aria-label="Email">
                    <i className="icon-paper-plane"></i>
                </a>
            </li>
        </ul>
    )

    return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.name}>
                    <img className={styles.logo} src="/images/logos/logo-light.svg" alt="arnovs logo" width="24px" height="100%" />
                    <span>Arno</span> van Staden
                </a>
            </Link>
            <nav className={styles.nav}>
                <Menu />
            </nav>
            <Social />
            <button className={styles.mobileButton} onClick={() => handleNavToggle()}>
                <i className="icon-menu"></i>
            </button>
            <div className={styles.mobileNav}>
                <div className={styles.notNav} onClick={() => handleNavToggle()}></div>
                <nav className={styles.menu}>
                    <i className={`icon-clear ${styles.close}`} onClick={() => handleNavToggle()}></i>
                    <Menu mobile />
                    <Social />
                </nav>
            </div>
        </header>
    )
}
