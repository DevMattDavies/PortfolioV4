import styles from "./DarkModeToggle.module.scss";
import { ReactElement } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = (): ReactElement | null => {
  const { theme: currentTheme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Stops hydration mismatch error
  if (!resolvedTheme) return null;

  return (
    <div className={styles.toggle}>
      <button
        type="button"
        onClick={toggleTheme}
        className={styles.toggle__button}
      >
        {resolvedTheme === "light" ? (
          <img
            className={styles.toggle__image}
            src={"/images/moon-dark.png"}
            alt={"sun"}
          />
        ) : (
          <img
            className={styles.toggle__image}
            src={"/images/sun-white.png"}
            alt={"moon"}
          />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
