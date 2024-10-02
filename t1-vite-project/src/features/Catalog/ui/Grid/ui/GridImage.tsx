import React from "react";

import styles from "../Grid.module.css";

interface GridImageProps {
  id: number;
  alt: string;
  src: string;
  hoveredItem: number | null;
  handleClickItem: () => void;
}

const GridImage: React.FC<GridImageProps> = ({
  id,
  alt,
  src,
  hoveredItem,
  handleClickItem,
}) => {
  // console.log(hoveredItem, id);
  return (
    <div className={styles.imageContainer} onClick={handleClickItem}>
      <img src={src} alt={alt} className={styles.image} />
      {hoveredItem === id && (
        <div className={styles.overlay}>
          <span className={styles.text}>Show details</span>
        </div>
      )}
    </div>
  );
};

export default GridImage;
