import styles from "./HomePage.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import HomeLinks from "./HomeLinks/HomeLinks";
import { motion } from "framer-motion";

export const HomePage = (): ReactElement | null => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pageTransitionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const navTransitionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  // Stops hydration mismatch error
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.homepage}
    >
      <motion.div
        className={styles.homepage__nav}
        variants={navTransitionVariants}
      >
        <div className={styles.homepage__titleContainer}>
          <img
            className={`${styles.homepage__logo} ${
              theme === "dark" ? "inverted" : ""
            }`}
            src={"/images/github-black.png"}
            alt={"logo"}
          />
          <h1 className={styles.homepage__title}>DevMattDavies</h1>
        </div>
        {mounted && <DarkModeToggle />}
      </motion.div>
      <HomeLinks />
    </motion.div>
  );
};
