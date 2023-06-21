import styles from "./HomePage.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import HomeLinks from "./HomeLinks/HomeLinks";

export const HomePage = (): ReactElement | null => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Stops hydration mismatch error
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__nav}>
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
      </div>
      <HomeLinks />
    </div>
  );
};
