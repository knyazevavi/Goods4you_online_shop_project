import React from "react";

import styles from "./AuthInput.module.css";

interface AuthInputProps {
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
  placeholder,
  value,
  handleChange,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${value ? styles.filledOn : styles.filledOff}`}
        value={value}
        onChange={handleChange}
      />
    </>
  );
};
export default AuthInput;
