import React, { useCallback, useEffect, useState } from "react";
import _debounce from "lodash/debounce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useLazySearchProductsQuery } from "../../../../entities/Product/api/productApi";
import { ProductItem } from "../../../../shared";

import styles from "./Search.module.css";

interface SearchProps {
  onProductsFetched: (products: ProductItem[], total: number) => void;
  resetToInitialData: () => void;
}

const Search: React.FC<SearchProps> = ({
  onProductsFetched,
  resetToInitialData,
}) => {
  const [value, setValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [limit] = useState(12);

  const [triggerSearch, { data, isLoading, error }] =
    useLazySearchProductsQuery();

  const debouncedSearchHandler = useCallback(
    _debounce((value: string) => {
      setDebouncedSearch(value);
    }, 1000),
    []
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearchHandler.cancel();
    const value = event.target.value;
    setValue(value);

    if (value === "") {
      resetToInitialData();
    } else {
      debouncedSearchHandler(value);
    }
  };

  useEffect(() => {
    if (debouncedSearch) {
      triggerSearch({ search: debouncedSearch, limit, skip: 0 });
    }
  }, [debouncedSearch, limit, triggerSearch]);

  useEffect(() => {
    if (data) {
      onProductsFetched(data.products, data.total);
    }
  }, [data, onProductsFetched]);

  useEffect(() => {
    return () => {
      debouncedSearchHandler.cancel();
    };
  }, [debouncedSearchHandler]);

  useEffect(() => {
    if (error) {
      toast.error("Error loading product");
    }
  }, [error]);

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
      {isLoading && <div className={styles.spinner}></div>}
      <ToastContainer />
    </section>
  );
};

export default Search;
