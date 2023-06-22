import styles from "./AboutPage.module.scss";
import { ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Layout from "../Layout/Layout";
import { useTheme } from "next-themes";

export const AboutPage = (): ReactElement | null => {
  const { theme, resolvedTheme } = useTheme();
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    setIsInverted(theme === "dark" || resolvedTheme === "dark");
  }, [theme, resolvedTheme]);

  const motionProps = {
    initial: { y: "10%", opacity: 0 },
    animate: { y: "0%", opacity: 1, transition: { duration: 1 } },
  };

  const parentVariants = {
    initial: {},
    animate: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <Layout
      motionProps={motionProps}
      leftContent={
        <div className={styles.about__image__container}>
          <img
            className={styles.about__image}
            src={"/images/profile.png"}
            alt={"my profile image"}
          />
        </div>
      }
      rightContent={
        <>
          <h2 className={styles.about__title}>About</h2>
          <p className={styles.about__text}>
            Hello and welcome! I&apos;m Matt - currently a Software Engineer at
            BT, and a web design enthusiast at heart. With a unique background
            in project management, I found my true passion lies at the
            intersection of logic and art that web design presents, using my
            love for design to craft intuitive and captivating digital
            experiences.
          </p>
          <p className={styles.about__text}>
            As a seasoned React developer, my work is driven by a relentless
            passion for front-end design. My expertise lies in leveraging modern
            technologies to create beautifully crafted, user-centric designs
            that are not only visually pleasing but also robust enough to scale
            with user needs. For me, each project is an exciting new canvas, a
            fresh opportunity to bring a vision to life.
          </p>
          <p className={styles.about__text}>
            My tech stack leans towards Next.js, TypeScript, and various CSS
            approaches. Why? Because these tools help me deliver
            high-performing, scalable applications without compromising on the
            detail-oriented, tailored design that I love.
          </p>
          <p className={styles.about__text}>
            Feel free to explore my work, and do not hesitate to{" "}
            <Link href={"/contact"} className={styles.about__contact}>
              get in touch
            </Link>
            . Let&apos;s create something great together!
          </p>
          <motion.div
            className={styles.about__icons}
            variants={parentVariants}
            animate="animate"
            initial="initial"
          >
            <motion.img
              className={`${styles.about__icon} ${isInverted && "inverted"}`}
              src={"/images/react.png"}
              alt={"react icon"}
              variants={imageVariants}
            />
            <motion.img
              className={`${styles.about__icon} ${isInverted && "inverted"}`}
              src={"/images/next.png"}
              alt={"next.js icon"}
              variants={imageVariants}
            />
            <motion.img
              className={`${styles.about__icon} ${isInverted && "inverted"}`}
              src={"/images/javascript.png"}
              alt={"javascript icon"}
              variants={imageVariants}
            />
            <motion.img
              className={`${styles.about__icon} ${isInverted && "inverted"}`}
              src={"/images/typescript.png"}
              alt={"typescript icon"}
              variants={imageVariants}
            />
            <motion.img
              className={`${styles.about__icon} ${isInverted && "inverted"}`}
              src={"/images/css.png"}
              alt={"css icon"}
              variants={imageVariants}
            />
          </motion.div>
        </>
      }
    ></Layout>
  );
};
