import React from "react";

import cartIcon from "../../assets/icons/Vector.png";

import styles from "./Content.module.css";
const CartIcon: React.FC = () => {
  return (
    <div>
      <img src={cartIcon} alt="Cart Icon" className={styles.cartIcon} />
    </div>
  );
};

export default CartIcon;
