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
        <Link href={"/"} passHref>
          <a>
            <Image
              alt="Tajine and Tanjiya"
              src="/logo.svg"
              className="relative cursor-pointer "
              width={100}
              height={100}
            />
          </a>
        </Link>

        <nav className={styles.nav} ref={navRef}>
          <span onClick={showNav}>
            <Link href={"/"}>Home</Link>
          </span>
          <span onClick={showNav}>
            <Link href={"/about"}>About</Link>
          </span>
          <span onClick={showNav}>
            <Link href={"/menu"}>Menu</Link>
          </span>
          <span onClick={showNav}>
            <Link href={"/Join-us"}>Join Us</Link>
          </span>

          <button
            className={`${styles.navBtn} ${styles.navColse}`}
            onClick={showNav}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-yellow-300 text-4xl"
            />
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
