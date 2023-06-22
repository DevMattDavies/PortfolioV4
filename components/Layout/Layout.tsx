import styles from "./Layout.module.scss";
import { AnimationProps, motion, MotionProps } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { ReactNode } from "react";

type LayoutProps = {
  leftContent: ReactNode;
  rightContent: ReactNode;
  motionProps: AnimationProps & MotionProps;
};

const Layout = ({ leftContent, rightContent, motionProps }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <motion.div {...motionProps}>
        <div className={styles.layout}>
          <div
            className={`${styles.layout__left} ${
              leftContent === null && "hidden"
            }`}
          >
            {leftContent}
          </div>
          <div className={styles.layout__right}>{rightContent}</div>
        </div>
      </motion.div>
    </>
  );
};

export default Layout;
