import React from "react";

import { Logo, Menu } from "../../shared";

import styles from "./Content.module.css";

interface ContentProps {
  isFooter?: boolean;
}

const Content: React.FC<ContentProps> = ({ isFooter = false }) => {
  return (
    <div className={styles.content}>
      <Logo />
      <Menu isFooter={isFooter} />
    </div>
  );
};

export default Content;
