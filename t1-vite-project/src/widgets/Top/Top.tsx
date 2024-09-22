import React from "react";

import Header from "../Header/Header";
import Hero from "./ui/Hero/Hero";

import styles from "./Top.module.css";

const Top: React.FC = () => {
  return (
    <header className={styles.top}>
      <Header />
      <Hero />
    </header>
  );
};
export default Top;
