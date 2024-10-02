import React, { useEffect } from "react";

import { Header, Footer } from "../../widgets";
import Cart from "../../entities/Cart/Cart";
import { cartProducts } from "../../shared/constants/constants";

import styles from "./CartPage.module.css";

const CartPage: React.FC = () => {
  useEffect(() => {
    document.title = "My cart | Goods4you";
  }, []);

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.cart}>
        <div className={styles.cartContainer}>
          <h1 className={styles.cartTitle}>My Cart</h1>
          {cartProducts.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Cart products={cartProducts} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CartPage;
