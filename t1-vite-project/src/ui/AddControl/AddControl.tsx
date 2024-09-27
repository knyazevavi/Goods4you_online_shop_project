import React from "react";

import styles from "./AddControl.module.css";

interface AddControlProps {
  quantity: number;
  onDelete: () => void;
}

const AddControl: React.FC<AddControlProps> = ({ quantity, onDelete }) => {
  return (
    <div className={styles.addControl}>
      <button
        // onClick={() => updateQuantity(item.id, item.quantity - 1)}
        onClick={onDelete}
        className={styles.quantityButton}
        aria-label="Decrease quantity"
        aria-controls="cart-item-quantity"
      >
        -
      </button>
      <span className={styles.quantity}>
        {quantity} {quantity > 1 ? "items" : "item"}
      </span>
      <button
        // onClick={() => updateQuantity(item.id, item.quantity + 1)}
        className={styles.quantityButton}
        aria-label="Increase quantity"
        aria-controls="cart-item-quantity"
      >
        +
      </button>
    </div>
  );
};
export default AddControl;
