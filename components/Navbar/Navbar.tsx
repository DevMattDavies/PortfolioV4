import styles from "./Navbar.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Cross as Hamburger } from "hamburger-react";
import MobileNavLinks from "./MobileNavLinks";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export const Navbar = (): ReactElement | null => {
  const router = useRouter();
  const currentPage = router.pathname;
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (url: string) => {
    router.push(url);
  };

  // Stops hydration mismatch error
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.nav}>
      <nav className={isMenuOpen ? "show" : ""}>
        <a className={styles.nav__link} onClick={() => navigate("/")}>
          Home
        </a>
        <a
          className={`${styles.nav__link} ${
            currentPage === "/about" ? styles.nav__link__about : ""
          }`}
          onClick={() => navigate("/about")}
        >
          About
        </a>
        <a
          className={`${styles.nav__link} ${
            currentPage === "/projects" ? styles.nav__link__projects : ""
          }`}
          onClick={() => navigate("/projects")}
        >
          Projects
        </a>
        <a
          className={`${styles.nav__link} ${
            currentPage === "/contact" ? styles.nav__link__contact : ""
          }`}
          onClick={() => navigate("/contact")}
        >
          Contact
        </a>
      </nav>
      <button
        className={styles.nav__hamburger}
        onClick={() => {
          setIsMenuOpen(true);
        }}
      >
        <Hamburger />
      </button>
      {mounted && <DarkModeToggle />}
    </div>
  );
};

export default Navbar;
