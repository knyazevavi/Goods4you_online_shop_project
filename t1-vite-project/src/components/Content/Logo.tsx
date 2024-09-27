import React from "react";
import { Link } from "react-router-dom";

import styles from "./Content.module.css";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      Goods4you
    </Link>
  );
};
export default Logo;
