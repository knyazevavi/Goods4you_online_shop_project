import React from "react";

import FAQContainer from "./ui/FAQContainer/FAQContainer";
import Footer from "../Footer/Footer";

import styles from "./Botton.module.css";

const Botton: React.FC = () => {
  return (
    <div className={styles.botton}>
      <FAQContainer />
      <Footer />
    </div>
  );
};

export default Botton;
