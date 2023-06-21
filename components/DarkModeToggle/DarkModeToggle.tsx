import styles from "./DarkModeToggle.module.scss";
import { ReactElement } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom MUI toggle theme
const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            color: "black",
            "&.Mui-checked": {
              color: "white",
            },
            "&.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "white",
              border: "1px solid white",
            },
          },
          "& .MuiSwitch-track": {
            backgroundColor: "white",
            border: "1px solid black",
          },
        },
      },
    },
  },
});

const DarkModeToggle = (): ReactElement | null => {
  const { theme: currentTheme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = (): void => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Stops hydration mismatch error
  if (!resolvedTheme) return null;

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.toggle}>
        <img
          className={styles.toggle__sun}
          src={"/images/sun.png"}
          alt={"sun"}
        />
        <Switch checked={resolvedTheme === "dark"} onChange={toggleTheme} />
        <img
          className={styles.toggle__moon}
          src={"/images/moon2.png"}
          alt={"moon"}
        />
      </div>
    </ThemeProvider>
  );
};

export default DarkModeToggle;
