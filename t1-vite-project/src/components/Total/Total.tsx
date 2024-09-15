import React from "react";

import { CartItem } from "../../types/interfaces";

import styles from "./Total.module.css";

interface TotalProps {
  totalProducts: CartItem[];
}

const Total: React.FC<TotalProps> = ({ totalProducts }) => {
  const calculateTotalPrice = () => {
    return totalProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={styles.cartSummary}>
      <div className={styles.common}>
        <div className={styles.item}>
          <span className={styles.label}>Total count</span>
          <span className={styles.value}>{totalProducts.length - 1} items</span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Price without discount</span>
          <span className={styles.value}>$700</span>
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.totalLabel}>Total price</span>
        <span className={styles.totalValue}>
          ${calculateTotalPrice() - 180}
        </span>
      </div>
    </div>
  );
};
export default Total;
