import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonFetchMore.module.css";

const ButtonFetchMore: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <div className={styles.buttonShoppingWrapper}>
      <button
        className={styles.buttonShopping}
        aria-label="Button show more product"
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonFetchMore;
