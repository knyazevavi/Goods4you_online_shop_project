import React from "react";

import styles from "./Warning.module.css";
interface WarningProps {
  name: string;
}

const Warning: React.FC<WarningProps> = ({ name }) => {
  return (
    <>
      <h1 className={styles.warningText}>{name}</h1>
    </>
  );
};

export default Warning;
