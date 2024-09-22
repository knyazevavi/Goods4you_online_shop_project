import React from "react";

import { CartItem } from "../../shared";
import { useTotalPrice } from "../../shared";

import styles from "./Total.module.css";

interface TotalProps {
  products: CartItem[];
}

const Total: React.FC<TotalProps> = ({ products }) => {
  const {
    calculateTotalPrice,
    calculateTotalPriceWithDiscount,
    calculateTotalProducts,
  } = useTotalPrice();

  return (
    <div className={styles.cartSummary}>
      <div className={styles.common}>
        <div className={styles.item}>
          <span className={styles.label}>Total count</span>
          <span className={styles.value}>
            {calculateTotalProducts(products)}
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>Price without discount</span>
          <span className={styles.value}>
            ${calculateTotalPrice(products).toFixed(2)}
          </span>
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.totalLabel}>Total price</span>
        <span className={styles.totalValue}>
          ${calculateTotalPriceWithDiscount(products).toFixed(2)}
        </span>
      </div>
    </div>
  );
};
export default Total;
