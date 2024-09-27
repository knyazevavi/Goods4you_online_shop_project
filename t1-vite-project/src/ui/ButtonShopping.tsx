import React from "react";

import { ButtonProps } from "./types/types";

import styles from "./Buttons.module.css";

const ButtonShopping: React.FC<ButtonProps> = ({
  href,
  name,
  flag = false,
}) => {
  return (
    <div
      className={
        flag
          ? `${styles.buttonShoppingWrapper} ${styles.center}`
          : styles.buttonShoppingWrapper
      }
    >
      <a href={href} className={styles.buttonShopping} aria-label={name}>
        {name}
      </a>
    </div>
  );
};

export default ButtonShopping;
