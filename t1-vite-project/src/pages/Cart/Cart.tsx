import React, { useEffect, useState } from "react";

import { Header, Footer, Total } from "../../components";
import { AddControl, ButtonCartIcon, ButtonDelete } from "../../ui";
import { cartProducts } from "../../utils/constans";

import styles from "./Cart.module.css";

const Cart: React.FC = () => {
  // const { cartItems, removeFromCart, updateQuantity } = useCart(); добавление товаров по клику из каталога и удаление
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    document.title = "My cart | Goods4you";
  }, []);

  return (
    <div className={styles.cart}>
      <Header />
      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>My Cart</h1>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className={styles.cartContent}>
            <form className={styles.cartForm}>
              <ul className={styles.cartList}>
                {cartProducts.map((item) => (
                  <li
                    key={item.idx}
                    className={`${styles.cartItem} ${hoveredItem === item.idx ? styles.itemHover : ""} ${item.quantity === 0 ? styles.itemRemoved : ""}`}
                    onMouseEnter={() => handleMouseEnter(item.idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={styles.itemLeft}>
                      <img
                        src={item.imageURl}
                        alt={item.title}
                        className={`${styles.itemImage} ${item.quantity === 0 ? styles.imgRemoved : ""}`}
                      />
                      <div className={styles.itemDetails}>
                        <a
                          // href={`/product/${item.idx}`}
                          href={`/product/12`}
                          className={`${styles.itemTitle} ${item.quantity === 0 ? styles.itemRemovedTitle : ""}`}
                          // className={styles.itemTitle}
                        >
                          {item.description}
                        </a>
                        <p className={styles.itemPrice}>${item.price}</p>
                      </div>
                    </div>
                    <div className={styles.itemControls}>
                      {item.quantity !== 0 ? (
                        <>
                          <AddControl quantity={item.quantity} />
                          <ButtonDelete />
                        </>
                      ) : (
                        <ButtonCartIcon isRemoved={true} />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </form>
            <Total totalProducts={cartProducts} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
