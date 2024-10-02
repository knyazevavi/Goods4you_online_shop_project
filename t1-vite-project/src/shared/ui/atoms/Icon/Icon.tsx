import React from "react";

import icon from "../../../assets/icons/Vector.png";

import styles from "./Icon.module.css";
import "../../../../app/styles/index.css";

const Icon: React.FC = () => {
  return (
    <>
      <img src={icon} alt="Cart Icon" className={styles.cartIcon} />
    </>
  );
};

export default Icon;
