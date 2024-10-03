import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonDelete.module.css";

const ButtonDelete: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button
      className={styles.buttonDelete}
      aria-label="Detele product item"
      onClick={onClick}
    >
      Delete
    </button>
  );
};

export default ButtonDelete;
