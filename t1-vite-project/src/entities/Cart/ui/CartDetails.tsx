import React from "react";

import styles from "../Cart.module.css";
import { Link } from "react-router-dom";
import { useTotalPrice } from "../../../shared";

interface CartDetailsProps {
  discount: number;
  refImg: string;
  title: string;
  hrefProduct: string;
  price: number;
  quantity: number;
}

const CartDetails: React.FC<CartDetailsProps> = ({
  discount,
  refImg,
  title,
  hrefProduct,
  price,
  quantity,
}) => {
  const { calculateDiscountedPrice } = useTotalPrice();
  return (
    <div className={styles.itemLeft}>
      <img
        src={refImg}
        alt={title}
        className={`${styles.itemImage} ${quantity === 0 ? styles.imgRemoved : ""}`}
      />
      <div className={styles.itemDetails}>
        <Link
          to={hrefProduct}
          className={`${styles.itemTitle} ${quantity === 0 ? styles.itemRemovedTitle : ""}`}
        >
          {title}
        </Link>
        <p className={styles.itemPrice}>
          ${calculateDiscountedPrice(price, discount)}
        </p>
      </div>
    </div>
  );
};
export default CartDetails;
