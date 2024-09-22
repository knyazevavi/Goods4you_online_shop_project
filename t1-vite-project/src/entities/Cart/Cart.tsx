import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RootState } from "../../app/store/store";
import Total from "../../widgets/Total/Total";
import { Loading, Warning } from "../../shared";
import CartDetails from "./ui/CartDetails";
import { ButtonControlContainer } from "../../shared";

import styles from "./Cart.module.css";

const Cart: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { products, loading } = useSelector((state: RootState) => state.cart);
  // console.log(products, "products ");
  // console.log(loading, "products ");

  useEffect(() => {
    if (loading === "failed" || !products.length) {
      toast.error("Error loading cart");
    }
  }, [loading, products]);

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  if (loading === "loading") return <Loading />;
  if (loading === "failed" || !products.length)
    return <Warning name="No items" />;

  return (
    <div className={styles.cartContent}>
      <form className={styles.cartForm}>
        <ul className={styles.cartList}>
          {products.map((item) => (
            <li
              key={item.id}
              className={`${styles.cartItem} ${hoveredItem === item.id ? styles.itemHover : ""} ${item.quantity === 0 ? styles.itemRemoved : ""}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CartDetails
                discount={item.discountPercentage}
                refImg={item.thumbnail}
                title={item.title}
                hrefProduct={`/product/12`}
                price={item.price}
                quantity={item.quantity}
              />
              <ButtonControlContainer product={item} type="cart" />
            </li>
          ))}
        </ul>
      </form>
      <Total products={products} />
      <ToastContainer />
    </div>
  );
};
export default Cart;
