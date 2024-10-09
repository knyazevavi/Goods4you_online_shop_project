import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { CartItem, ProductItem } from "../../../../shared";
import GridImage from "./ui/GridImage";
import GridDetails from "./ui/GridDetails";

import styles from "./Grid.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";

interface GridProps {
  products: ProductItem[];
}

const Grid: React.FC<GridProps> = ({ products }) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const cartState = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const cartItems = cartState.products.reduce(
      (acc: { [key: number]: number }, item: CartItem) => {
        acc[item.id] = item.quantity;
        return acc;
      },
      {}
    );

    setQuantities(cartItems);
  }, [cartState]);

  const navigate = useNavigate();

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClickItem = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <section
      id="grid"
      className={styles.gridContainer}
      aria-labelledby="products-lists"
    >
      {products.map((item) => {
        return (
          <div
            key={uuidv4()}
            className={`${styles.gridItem}`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <GridImage
              id={item.id}
              alt="Product picture"
              src={item.thumbnail}
              hoveredItem={hoveredItem}
              handleClickItem={() => handleClickItem(item.id)}
            />
            <GridDetails
              item={item}
              id={item.id}
              hoveredItem={hoveredItem === item.id}
              handleClickItem={() => handleClickItem(item.id)}
              quantities={quantities}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Grid;
