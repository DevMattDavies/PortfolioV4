import { motion } from "framer-motion";
import styles from "./HomeLinks.module.scss";
import { ReactElement } from "react";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const HomeLinks = (): ReactElement | null => {
  return (
    <motion.div
      className={styles.navLinks}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href={"/about"}
        className={`${styles.navLinks__link} ${styles.navLinks__aboutLink}`}
        variants={itemVariants}
      >
        About
      </motion.a>
      <motion.a
        href={"/projects"}
        className={`${styles.navLinks__link} ${styles.navLinks__projectsLink}`}
        variants={itemVariants}
      >
        Projects
      </motion.a>
      <motion.a
        href={"/contact"}
        className={`${styles.navLinks__link} ${styles.navLinks__contactLink}`}
        variants={itemVariants}
      >
        Contact
      </motion.a>
    </motion.div>
  );
};

export default HomeLinks;
