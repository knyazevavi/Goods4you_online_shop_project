import React from "react";

import ButtonControl from "../ButtonControl/ButtonControl";
import { AddControlProps } from "../../model/types";

import styles from "./AddControl.module.css";

const AddControl: React.FC<AddControlProps> = ({
  id,
  type,
  quantities,
  quantity,
  onDelete,
  onAdd,
}) => {
  return (
    <div className={styles.addControl}>
      <ButtonControl
        onDelete={onDelete}
        label="Decrease quantity"
        control="cart-item-quantity"
        value="-"
      />
      {type === "grid" && id ? (
        <span className={styles.quantity}>
          {quantities?.[id]}{" "}
          {quantities?.[id] && quantities?.[id] > 1 ? "items" : "item"}
        </span>
      ) : (
        <span className={styles.quantity}>
          {quantity} {quantity && quantity > 1 ? "items" : "item"}
        </span>
      )}
      <ButtonControl
        onAdd={onAdd}
        label="Increase quantity"
        control="cart-item-quantity"
        value="+"
      />
    </div>
  );
};
export default AddControl;
