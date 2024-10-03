import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { Header, Footer } from "../../widgets";
import { Product } from "../../entities";
import { useFetchProductByIdQuery } from "../../entities/Product/api/productApi";
import { Loading, Warning } from "../../shared";
import { setProduct } from "../../entities/Product/model/ProductSlice";

import styles from "./ProductPage.module.css";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [productId, setProductId] = useState("");

  useEffect(() => {
    if (location) {
      setProductId(location.pathname.split("/")[2]);
    }
  }, [location]);

  const {
    data: product,
    error,
    isLoading,
  } = useFetchProductByIdQuery(parseInt(productId), {
    skip: !productId || isNaN(parseInt(productId)),
  });

  useEffect(() => {
    if (product) {
      dispatch(setProduct(product));
      document.title = `${product?.title} | Goods4you | Goods4you`;
    }

    if (error) {
      toast.error("Error loading product");
    }
  }, [product, error, dispatch]);

  if (isLoading) return <Loading />;
  if (!product)
    return <Warning name="Нет данных по продукты или проблемы с загрузкой" />;

  return (
    <div className={styles.productContent}>
      <Header />
      <Product product={product} />
      <Footer />
      <ToastContainer />
    </div>
  );
};
export default ProductPage;
