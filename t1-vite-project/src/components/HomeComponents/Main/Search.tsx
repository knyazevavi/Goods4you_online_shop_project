import React, { useState } from "react";

import styles from "./Main.module.css";

const Search: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <section
      id="search"
      className={styles.searchContainer}
      aria-labelledby="search-section"
    >
      <input
        type="text"
        placeholder="Search by title"
        className={`${styles.input} ${value ? styles.filledOn : styles.filledOff}`}
        value={value}
        onChange={handleChange}
      />
    </section>
  );
};

export default Search;
