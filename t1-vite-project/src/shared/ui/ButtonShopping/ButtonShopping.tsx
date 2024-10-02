import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonShopping.module.css";

const ButtonShopping: React.FC<ButtonProps> = ({ href, name }) => {
  return (
    <div className={styles.buttonShoppingWrapper}>
      <a href={href} className={styles.buttonShopping} aria-label={name}>
        {name}
      </a>
    </div>
  );
};

export default ButtonShopping;
