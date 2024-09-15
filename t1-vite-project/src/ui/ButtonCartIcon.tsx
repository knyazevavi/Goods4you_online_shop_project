import React from "react";

import { CartIcon } from "../components";
import { ButtonProps } from "./types/types";

import styles from "./Buttons.module.css";

const ButtonCartIcon: React.FC<ButtonProps> = ({ onAdd, isRemoved }) => {
  return (
    <button
      onClick={onAdd}
      className={
        isRemoved
          ? `${styles.buttonCartIcon} ${styles.removedState}`
          : styles.buttonCartIcon
      }
      aria-label="Add to cart"
    >
      <CartIcon />
    </button>
  );
};

export default ButtonCartIcon;
