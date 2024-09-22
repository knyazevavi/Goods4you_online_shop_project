import React from "react";

import { ButtonControlContainer } from "../../../shared";
import { ProductItem } from "../../../shared";

import styles from "../Product.module.css";

interface ProductPriceProps {
  product: ProductItem;
  currentPrice?: string;
  originalPrice?: string;
  discount?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  product,
  currentPrice,
  originalPrice,
  discount,
}) => (
  <div className={styles.buy}>
    <div className={styles.prices}>
      <div className={styles.pricesAmout}>
        <p className={styles.currentPrice}>{currentPrice}</p>
        <p className={styles.originalPrice}>{originalPrice}</p>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.text}>
        <p>
          Your discount: <span className={styles.discount}>{discount}</span>
        </p>
      </div>
    </div>
    <div className={styles.button}>
      <ButtonControlContainer product={product} type="product" />
    </div>
  </div>
);

export default ProductPrice;
