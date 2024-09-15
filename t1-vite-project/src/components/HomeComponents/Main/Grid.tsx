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
  const { addToCart } = useCart();
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
            className={`${styles.gridItem} ${item.idx === 2 ? styles.alwaysShowOverlay : ""} ${item.idx === 4 ? styles.gridItemInCart : ""}`}
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
            <div
              className={
                item.idx == 4
                  ? // cartItems.length > 0
                    `${styles.itemContent}${styles.expansionColumn}`
                  : styles.itemContent
              }
            >
              <div className={styles.itemInfo} onClick={handleClickItem}>
                <p
                  className={`${
                    hoveredItem === item.idx
                      ? styles.itemDescriptionHover
                      : styles.itemDescription
                  } ${item.idx === 4 ? styles.itemDescriptionInCart : ""}`}
                >
                  {item.description}
                </p>
                <p className={styles.itemPrice}>${item.price}</p>
              </div>
              <ButtonCart
                onAdd={() => handleAddToCart(item)}
                id={item.idx}
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
