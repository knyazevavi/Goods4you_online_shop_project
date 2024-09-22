import React from "react";

import { ButtonControlProps } from "../../model/types";

import styles from "./ButtonControl.module.css";

const ButtonControl: React.FC<ButtonControlProps> = ({
  onDelete,
  onAdd,
  value,
  label,
  control,
}) => {
  return (
    <button
      onClick={value == "-" ? onDelete : onAdd}
      className={styles.quantityButton}
      aria-label={label}
      aria-controls={control}
    >
      {value}
    </button>
  );
};
export default ButtonControl;
