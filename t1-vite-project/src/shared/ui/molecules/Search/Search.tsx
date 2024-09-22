import React, { useState } from "react";
import _debounce from "lodash/debounce";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../atoms/Input/Input";

import styles from "./Search.module.css";
import "../../../../app/styles/index.css";

const Search: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <section
      id="search"
      className={styles.searchContainer}
      aria-labelledby="search-section"
    >
      <Input onChange={handleChange} value={value} />
    </section>
  );
};

export default Search;
