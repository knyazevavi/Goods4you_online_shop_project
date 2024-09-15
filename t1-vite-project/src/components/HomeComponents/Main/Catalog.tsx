import React from "react";

import Search from "./Search";

import styles from "./Main.module.css";
import Grid from "./Grid";
import { ButtonShopping } from "../../../ui";

const Catalog: React.FC = () => {
  return (
    <main id="catalog" className={styles.catalog}>
      <h1 className={styles.title}>Catalog</h1>
      <Search />
      <Grid />
      <ButtonShopping href="" name="Show more" flag={true} />
    </main>
  );
};

export default Catalog;
