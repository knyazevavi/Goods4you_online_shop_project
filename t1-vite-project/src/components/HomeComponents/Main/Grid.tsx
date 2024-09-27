import React, { useState } from "react";

import { ButtonCart } from "../../../ui";
import { CartItem } from "../../../types/interfaces";

import styles from "./Main.module.css";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

const items = Array.from({ length: 12 }, (_, index) => ({
  idx: index + 1,
  imageURl: "/src/assets/images/mascara.png",
  title: `Картинка №${index + 1}`,
  description: "Essence Mascara Lash Princess",
  price: 110,
  showOverlay: index + 1 === 2,
  quantity: 0,
}));

const Grid: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart } = useCart();
  const cartIdx = cartItems.map((item: CartItem) => item.idx);
  console.log(cartIdx);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  // const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClickItem = () => {
    navigate("/product/12");
  };

  const handleAddToCart = (item: CartItem) => {
    addToCart(item);
    // setQuantities((prev) => ({
    //   ...prev,
    //   [item.id]: (prev[item.id] || 0) + 1,
    // }));
  };

  const handleDeteleFromCart = (id: number) => {
    removeFromCart(id);
  };

  //сделать удаление и добавление товаров в корзину
  // const increaseQuantity = (id: number) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: (prev[id] || 0) + 1,
  //   }));
  // };

  // const decreaseQuantity = (id: number) => {
  //   setQuantities((prev) => ({
  //     ...prev,
  //     [id]: Math.max((prev[id] || 1) - 1, 0),
  //   }));
  // };
  return (
    <section
      id="grid"
      className={styles.gridContainer}
      aria-labelledby="products-lists"
    >
      {items.map((item) => {
        return (
          <div
            key={item.idx}
            className={`${styles.gridItem}`}
            onMouseEnter={() => handleMouseEnter(item.idx)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.imageContainer} onClick={handleClickItem}>
              <img
                src={item.imageURl}
                alt={item.title}
                className={styles.image}
              />
              {hoveredItem === item.idx && (
                <div className={styles.overlay}>
                  <span className={styles.text}>Show details</span>
                </div>
              )}
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemInfo} onClick={handleClickItem}>
                <p
                  // className={`${
                  //   hoveredItem === item.idx
                  //     ? styles.itemDescriptionHover
                  //     : styles.itemDescription
                  // } ${cartIdx.includes(item.idx) ? styles.itemDescriptionInCart : ""}`}
                  className={` ${styles.itemDescription} ${
                    hoveredItem === item.idx ? styles.itemDescriptionHover : ""
                  } ${cartIdx.includes(item.idx) ? styles.itemDescriptionInCart : ""}`}
                >
                  {item.description}
                </p>
                <p className={styles.itemPrice}>${item.price}</p>
              </div>
              <ButtonCart
                onAdd={() => handleAddToCart(item)}
                onDelete={() => handleDeteleFromCart(item.idx)}
                id={item.idx}
                productIdx={cartIdx}
                // onIncrease={() => increaseQuantity(item.id)}
                // onDecrease={() => decreaseQuantity(item.id)}
                // quantity={quantities[item.id] || 0}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
