import React from "react";

import styles from "../Product.module.css";

interface ProductDetailsProps {
  title: string;
  description: string;
  availabilityStatus: string;
  stock: number;
  tags: string[];
  rating: number;
  shippingInformation: string;
  warrantyInformation: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  description,
  availabilityStatus,
  stock,
  tags,
  rating,
  shippingInformation,
  warrantyInformation,
}) => {
  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < roundedRating ? styles.filledStar : styles.lastStar}
    >
      ★
    </span>
  ));

  return (
    <>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.meta}>
          <div className={styles.rating}>
            <span className={styles.stars}>{stars}</span>
            <p className={styles.category}>{tags?.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className={styles.stock}>
        <p className={styles.stockText}>
          {availabilityStatus} -
          {stock > 10 ? ` ${stock} left.` : ` Only ${stock} left!`}
        </p>
      </div>
      <p className={styles.content}>{description}</p>
      <div className={styles.other}>
        <div className={styles.info}>{warrantyInformation}</div>
        <div className={styles.info}>{shippingInformation}</div>
      </div>
    </>
  );
};

export default ProductDetails;
