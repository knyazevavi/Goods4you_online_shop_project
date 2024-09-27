import React from "react";

import { ButtonCartProps } from "./types/types";
import AddControl from "./AddControl/AddControl";
import ButtonCartIcon from "./ButtonCartIcon";

import styles from "./Buttons.module.css";

const ButtonCart: React.FC<ButtonCartProps> = ({
  onAdd,
  onDelete,
  id,
  productIdx,
}) => {
  return (
    <div className={styles.buttonsCartControl}>
      {!productIdx?.includes(id) ? (
        <ButtonCartIcon onAdd={onAdd} />
      ) : (
        <AddControl quantity={1} onDelete={onDelete} />
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
