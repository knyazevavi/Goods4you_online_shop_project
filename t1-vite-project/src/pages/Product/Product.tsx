import React, { useEffect } from "react";

import { Header, Footer } from "../../components";
import { ButtonShopping } from "../../ui";

import styles from "./Product.module.css";

const OneProduct: React.FC = () => {
  useEffect(() => {
    document.title = "Essence Mascara Lash Princess | Goods4you | Goods4you";
  }, []);
  return (
    <div className={styles.productContent}>
      <Header />
      <div className={styles.productContainer}>
        <div className={styles.productGallery}>
          <img
            src="/src/assets/images/mascara.png"
            alt="Main product"
            className={styles.mainImage}
          />
          <div className={styles.scrollWithItems}>
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                src={"/src/assets/images/mascara.png"}
                alt={`Product thumbnail ${index + 1}`}
                className={styles.scrollImg}
              />
            ))}
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.title}>
            <h1>Essence Mascara Lash Princess</h1>
            <div className={styles.meta}>
              <div className={styles.rating}>
                <span className={styles.stars}>
                  ★★★★<span className={styles.lastStar}>★</span>
                </span>
                <p className={styles.category}>
                  electronics, selfie accessories
                </p>
              </div>
            </div>
          </div>
          <div className={styles.stock}>
            <p className={styles.stockText}>In Stock - Only 5 left!</p>
          </div>
          <p className={styles.content}>
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects. Achieve dramatic lashes with
            this long-lasting and cruelty-free formula.
          </p>
          <div className={styles.other}>
            <div className={styles.info}>1 month warranty</div>
            <div className={styles.info}>Ships in 1 month</div>
          </div>
          <div className={styles.buy}>
            <div className={styles.prices}>
              <div className={styles.pricesAmout}>
                <p className={styles.currentPrice}>$7.17</p>
                <p className={styles.originalPrice}>$9.99</p>
              </div>
              <div className={styles.verticalLine}></div>
              <div className={styles.text}>
                <p>
                  Your discount: <span className={styles.discount}>14.5%</span>
                </p>
              </div>
            </div>
            <div className={styles.button}>
              <ButtonShopping name="Add to cart" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default OneProduct;
