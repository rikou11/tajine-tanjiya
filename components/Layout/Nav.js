import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "../../styles/Nav.module.css";
const Nav = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle(styles.showNav);
  };
  return (
    <div className={styles.div}>
      <header className={styles.header}>
        <Image
          alt="Tajine and Tanjiya"
          src="/logo.svg"
          className="relative "
          width={100}
          height={100}
        />
        <nav className={styles.nav} ref={navRef}>
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="/">About</Link>
          </span>
          <span>
            <Link href="/">Menu</Link>
          </span>
          <span>
            <Link href="/">Join Us</Link>
          </span>

          <button
            className={`${styles.navBtn} ${styles.navColse}`}
            onClick={showNav}
          >
            <FontAwesomeIcon icon={faTimes}className="text-yellow-300 text-2xl"  />
          </button>
        </nav>
        <button className={styles.navBtn} onClick={showNav}>
          <FontAwesomeIcon icon={faBars} className="text-yellow-300 text-2xl" />
        </button>
      </header>
    </div>
  );
};

export default Nav;
