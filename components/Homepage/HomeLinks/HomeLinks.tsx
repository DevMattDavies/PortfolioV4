import styles from "./HomeLinks.module.scss";
import { ReactElement, useContext } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const HomeLinks = (): ReactElement | null => {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  const linkTransitionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.5 },
    }),
  };

  return (
    <div className={styles.navLinks}>
      <motion.a
        variants={linkTransitionVariants}
        initial="hidden"
        animate="show"
        custom={0.5}
        className={`${styles.navLinks__link} ${styles.navLinks__aboutLink}`}
        onClick={() => navigate("/about")}
      >
        About
      </motion.a>
      <motion.a
        variants={linkTransitionVariants}
        initial="hidden"
        animate="show"
        custom={1}
        className={`${styles.navLinks__link} ${styles.navLinks__projectsLink}`}
        onClick={() => navigate("/projects")}
      >
        Projects
      </motion.a>
      <motion.a
        variants={linkTransitionVariants}
        initial="hidden"
        animate="show"
        custom={1.5}
        className={`${styles.navLinks__link} ${styles.navLinks__contactLink}`}
        onClick={() => navigate("/contact")}
      >
        Contact
      </motion.a>
    </div>
  );
};

export default HomeLinks;
