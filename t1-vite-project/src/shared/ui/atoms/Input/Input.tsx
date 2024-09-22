import React from "react";

import styles from "./Input.module.css";
import "../../../../app/styles/index.css";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title"
      className={`${styles.input} ${value ? styles.filledOn : styles.filledOff}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
