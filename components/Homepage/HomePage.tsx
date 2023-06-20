import styles from "./HomePage.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import HomeLinks from "./HomeLinks/HomeLinks";

export const HomePage = (): ReactElement | null => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className={styles.homepage}>
      <motion.div
        className={styles.homepage__nav}
        initial="hidden"
        animate="visible"
        variants={navVariants}
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
    </div>
  );
};
