import React from "react";

import CartIcon from "../CartIcon/CartIcon";
import { ButtonProps } from "../../model/types";

import styles from "./ButtonCartIcon.module.css";

const ButtonCartIcon: React.FC<ButtonProps> = ({ onAdd, isRemoved }) => {
  return (
    <button
      onClick={onAdd}
      className={
        isRemoved
          ? `${styles.buttonCartIcon} ${styles.removedState}`
          : styles.buttonCartIcon
      }
    >
      <CartIcon />
    </button>
  );
};

export default ButtonCartIcon;
