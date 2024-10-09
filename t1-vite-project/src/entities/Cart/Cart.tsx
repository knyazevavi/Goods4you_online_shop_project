import React, { useState } from "react";
import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import Total from "../../widgets/Total/Total";
import CartDetails from "./ui/CartDetails";
import { ButtonControlContainer } from "../../shared";
import { CartItem } from "../../shared";
import { RootState } from "../../app/store/store";

import styles from "./Cart.module.css";

interface CartProps {
  products: CartItem[];
}

const Cart: React.FC<CartProps> = ({ products }) => {
  console.log(products, "products");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const removedItems = useSelector(
    (state: RootState) => state.cart.removedItems
  );

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.cartContent}>
      <form className={styles.cartForm}>
        <ul className={styles.cartList}>
          {products.map((item) => (
            <li
              key={item.id}
              className={`${styles.cartItem} ${hoveredItem === item.id ? styles.itemHover : ""}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CartDetails
                discount={item.discountPercentage}
                refImg={item.thumbnail}
                title={item.title}
                hrefProduct={`/product/${item.id}`}
                price={item.price}
                quantity={item.quantity}
              />
              <ButtonControlContainer product={item} type="cart" />
            </li>
          ))}
          {removedItems.length > 0 &&
            removedItems.map((item) => (
              <li
                key={item.id}
                className={`${styles.cartItem} ${hoveredItem === item.id ? styles.itemHover : ""} ${styles.itemRemoved}`}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <CartDetails
                  discount={item.discountPercentage}
                  refImg={item.thumbnail}
                  title={item.title as string}
                  hrefProduct={`/product/${item.id}`}
                  price={item.price}
                  quantity={item.quantity as number}
                />
                <ButtonControlContainer product={item} type="cart" />
              </li>
            ))}
        </ul>
      </form>
      <Total products={products} />
    </div>
  );
};
export default Cart;
