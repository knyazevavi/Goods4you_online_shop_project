import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Search from "./ui/Search/Search";
import Grid from "./ui/Grid/Grid";
import { ProductItem, ButtonFetchMore, Warning, Loading } from "../../shared";
import {
  useLazySearchProductsQuery,
  useSearchProductsQuery,
} from "../../entities/Product/api/productApi";
import { useFetchCartItems } from "../../shared";

import styles from "./Catalog.module.css";

const Catalog: React.FC = () => {
  const [limit] = useState(12);
  const cart = useFetchCartItems(1);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [initialProducts, setInitialProducts] = useState<ProductItem[]>([]);
  const [initialTotal, setInitialTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState(false);

  const {
    data: initialData,
    isLoading: isInitialLoading,
    error: initialError,
  } = useSearchProductsQuery({ search: "", limit, skip: 0 });

  useEffect(() => {
    if (initialData?.products) {
      setInitialProducts(initialData.products);
      setInitialTotal(initialData.total);
      setProducts(initialData.products);
      setSkip(initialData.products.length);
      setIsSearchMode(true);
      setIsLoadMoreDisabled(initialData.products.length >= initialData.total);
    }
  }, [initialData]);

  const [triggerSearch, { data, isLoading, error }] =
    useLazySearchProductsQuery();

  const handleSearch = (newProducts: ProductItem[], totalItems: number) => {
    if (totalItems == 0) return;
    setProducts(newProducts);
    setSkip(newProducts.length);
    setIsSearchMode(true);
    setIsLoadMoreDisabled(newProducts.length >= totalItems);
  };

  // console.log(isSearchMode, "isSearchMode");
  // console.log(products, "products");

  // console.log(initialProducts, "initialProducts");
  // console.log(initialTotal, "initialTotal");
  // console.log(loadingStatus, "loadingStatus");

  useEffect(() => {
    if (data !== undefined && !isSearchMode) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data, isSearchMode]);

  useEffect(() => {
    if (data) {
      if (skip < limit) return;
      if (skip === limit) {
        setProducts(data.products);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
    }
  }, [data, skip]);

  const resetToInitialData = () => {
    if (initialData) {
      setProducts(initialData.products);
      setSkip(initialData.products.length);
      setIsSearchMode(false);
      setIsLoadMoreDisabled(initialData.products.length >= initialTotal);
    }
  };

  const handleLoadMore = () => {
    const newSkip = skip + limit;
    setSkip(newSkip);

    triggerSearch({
      search: "",
      limit: limit,
      skip: newSkip,
    });
  };

  useEffect(() => {
    if (error || initialError) {
      toast.error("Error loading product");
    }
  }, [error, initialError]);

  return (
    <main id="catalog" className={styles.catalog}>
      <h1 className={styles.title}>Catalog</h1>
      <Search
        onProductsFetched={handleSearch}
        resetToInitialData={resetToInitialData}
      />
      {products.length !== 0 ? (
        isInitialLoading ? (
          <Loading />
        ) : (
          <>
            <Grid products={products} />
            {!isLoadMoreDisabled &&
              (isLoading ? (
                <div className={styles.spinnerContainer}>
                  <div className={styles.spinner}></div>
                </div>
              ) : (
                <ButtonFetchMore name="Show more" onClick={handleLoadMore} />
              ))}
          </>
        )
      ) : (
        <Warning name="No products found" />
      )}
      <ToastContainer />
    </main>
  );
};

export default Catalog;
