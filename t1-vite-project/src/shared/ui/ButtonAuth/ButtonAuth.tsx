import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonAuth.module.css";

const ButtonAuth: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        aria-label="Button authorization"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonAuth;
