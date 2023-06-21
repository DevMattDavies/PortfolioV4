import styles from "./HomeLinks.module.scss";
import { ReactElement } from "react";

export const HomeLinks = (): ReactElement | null => {
  return (
    <div className={styles.navLinks}>
      <a
        href={"/about"}
        className={`${styles.navLinks__link} ${styles.navLinks__aboutLink}`}
      >
        About
      </a>
      <a
        href={"/projects"}
        className={`${styles.navLinks__link} ${styles.navLinks__projectsLink}`}
      >
        Projects
      </a>
      <a
        href={"/contact"}
        className={`${styles.navLinks__link} ${styles.navLinks__contactLink}`}
      >
        Contact
      </a>
    </div>
  );
};

export default HomeLinks;
