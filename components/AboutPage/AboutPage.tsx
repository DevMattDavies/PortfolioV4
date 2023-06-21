import styles from "./AboutPage.module.scss";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Navbar from "../Navbar/Navbar";

export const AboutPage = (): ReactElement | null => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1, transition: { duration: 1 } }}
      style={{ minHeight: "100vh" }}
    >
      <Navbar />
      <div></div>
    </motion.div>
  );
};
