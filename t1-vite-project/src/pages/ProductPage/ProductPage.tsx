import React, { useEffect } from "react";

import { Header, Footer } from "../../widgets";
import { Product } from "../../entities";

import styles from "./ProductPage.module.css";

const ProductPage: React.FC = () => {
  useEffect(() => {
    document.title = "Essence Mascara Lash Princess | Goods4you | Goods4you";
  }, []);
  return (
    <div className={styles.productContent}>
      <Header />
      <Product />
      <Footer />
    </div>
  );
};
export default ProductPage;
