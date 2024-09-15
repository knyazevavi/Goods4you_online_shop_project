import React from "react";

import { ButtonProps } from "./types/types";
import AddControl from "./AddControl/AddControl";
import ButtonCartIcon from "./ButtonCartIcon";

import styles from "./Buttons.module.css";

const ButtonCart: React.FC<ButtonProps> = ({ onAdd, id }) => {
  return (
    <div className={styles.buttonsCartControl}>
      {id !== 4 ? (
        <ButtonCartIcon onAdd={onAdd} />
      ) : (
        <AddControl quantity={1} />
      )}
      {/* {quantity === 0 ? (
        <button onClick={onAdd} className={styles.buttonCartIcon}>
          <CartIcon />
        </button>
      ) : (<AddControl quantity={} />)} */}
    </div>
  );
};

export default ButtonCart;
