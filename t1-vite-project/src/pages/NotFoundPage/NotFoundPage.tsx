import React, { useEffect } from "react";

import { Header, Footer } from "../../widgets";

import styles from "./NotFoundPage.module.css";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | Goods4you";
  }, []);
  return (
    <div className={styles.pageNotFound}>
      <Header />
      <h1 className={styles.textNotFound}>404 - Page Not Found</h1>
      <Footer />
    </div>
  );
};
export default NotFound;
