import React from "react";

import { ButtonProps } from "../../model/types";

import styles from "./ButtonCartAdd.module.css";

const ButtonCartAdd: React.FC<ButtonProps> = ({ name, onAdd }) => {
  return (
    <div className={`styles.buttonShoppingWrapper`}>
      <button
        className={styles.buttonShopping}
        aria-label={name}
        onClick={onAdd}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonCartAdd;
