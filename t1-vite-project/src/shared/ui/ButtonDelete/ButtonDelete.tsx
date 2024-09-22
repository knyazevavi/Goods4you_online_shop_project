import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonDelete.module.css";

const ButtonDelete: React.FC<ButtonProps> = () => {
  return (
    <button className={styles.buttonDelete} aria-label="Detele product item">
      Delete
    </button>
  );
};

export default ButtonDelete;
