import React from "react";

import icon from "../../assets/icons/Vector.png";

import styles from "./CartIcon.module.css";

const CartIcon: React.FC = () => {
  return (
    <>
      <img src={icon} alt="Cart Icon" className={styles.cartIcon} />
    </>
  );
};

export default CartIcon;
