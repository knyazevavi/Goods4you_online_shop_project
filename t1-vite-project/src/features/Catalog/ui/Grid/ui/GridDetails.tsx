import React from "react";

import { ButtonControlContainer, useTotalPrice } from "../../../../../shared";
import { ProductItem } from "../../../../../shared";

import styles from "../Grid.module.css";

interface GridDetailsProps {
  item: ProductItem;
  id: number;
  hoveredItem: boolean;
  handleClickItem: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  quantities: { [key: number]: number };
}

const GridDetails: React.FC<GridDetailsProps> = ({
  item,
  id,
  hoveredItem,
  handleClickItem,
  onIncrease,
  onDecrease,
  quantities,
}) => {
  const { calculateDiscountedPrice } = useTotalPrice();

  return (
    <div className={styles.itemContent}>
      <div className={styles.itemInfo} onClick={handleClickItem}>
        <p
          className={` ${styles.itemDescription} ${
            hoveredItem ? styles.itemDescriptionHover : ""
          }`}
        >
          {item.title}
        </p>
        <p className={styles.itemPrice}>
          ${calculateDiscountedPrice(item.price, item.discountPercentage)}
        </p>
      </div>
      <ButtonControlContainer
        product={item}
        type="grid"
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        quantities={quantities}
        id={id}
      />
    </div>
  );
};

export default GridDetails;

// ${cartIdx.includes(id) ? styles.itemDescriptionInCart : ""}
