import React from "react";

import ButtonShopping from "../../../ui/ButtonShopping";

import styles from "./Top.module.css";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero">
      <div className={styles.content}>
        <div className={styles.backText}>Goods4You</div>
        <div className={styles.textContainer}>
          <h1 className={styles.textContainerFirstChild}>
            Any products from famous <br /> brands with worldwide delivery
          </h1>
          <h2 className={styles.textContainerSecondChild}>
            We sell smartphones, laptops, clothes, shoes <br />
            and many other products at low prices
          </h2>
          <ButtonShopping name="Go to shopping" href="#catalog" />
        </div>
      </div>
    </section>
  );
};

export default Hero;