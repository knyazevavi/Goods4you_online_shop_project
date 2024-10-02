import React from "react";

import Icon from "../Icon/Icon";

import styles from "./Button.module.css";
import "../../../../app/styles/index.css";

interface ButtonSBProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonSBProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonCartIcon}>
      <Icon />
    </button>
  );
};

export default Button;
