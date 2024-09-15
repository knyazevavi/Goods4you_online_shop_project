import React from "react";

import Content from "../Content/Content";

import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Content />
    </div>
  );
};

export default Header;
