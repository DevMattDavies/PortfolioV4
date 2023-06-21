import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // const [page, setPage] = useState("home");
  return (
    <ThemeProvider defaultTheme={"light"}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
