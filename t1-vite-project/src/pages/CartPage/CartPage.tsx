import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Header, Footer } from "../../widgets";
import Cart from "../../entities/Cart/Cart";
import { RootState } from "../../app/store/store";
import { Loading, Warning } from "../../shared";

import styles from "./CartPage.module.css";

const CartPage: React.FC = () => {
  const { products, loading } = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    document.title = "My cart | Goods4you";
  }, []);

  useEffect(() => {
    if (loading === "failed" || !products.length) {
      toast.error("Error loading cart");
    }
  }, [loading, products]);

  if (loading === "loading") return <Loading />;
  if (loading === "failed") return <Warning name="No items" />;

  return (
    <div className={styles.cartPage}>
      <Header />
      <div className={styles.cart}>
        <div className={styles.cartContainer}>
          <h1 className={styles.cartTitle}>My Cart</h1>
          {products.length === 0 ? (
            <Warning name="Your cart is empty" />
          ) : (
            <>
              <Cart products={products} />
            </>
          )}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};
export default CartPage;
