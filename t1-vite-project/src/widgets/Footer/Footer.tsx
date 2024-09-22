import React from "react";

import Content from "../Content/Content";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Content isFooter={true} />
    </footer>
  );
};

export default Footer;
