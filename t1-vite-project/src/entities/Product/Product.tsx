import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setProduct } from "./model/ProductSlice";
import { useFetchProductByIdQuery } from "./api/productApi";
import { Loading, useTotalPrice, Warning } from "../../shared";

import ProductImage from "./ui/ProductImage";
import ProductPrice from "./ui/ProductPrice";
import ProductDetails from "./ui/ProductDetails";

import styles from "./Product.module.css";

const Product: React.FC = () => {
  const { data: product, error, isLoading } = useFetchProductByIdQuery(2);

  const dispatch = useDispatch();
  const { calculateDiscountedPrice } = useTotalPrice();

  useEffect(() => {
    if (product) {
      dispatch(setProduct(product));
      document.title = `${product.title} | Goods4you | Goods4you`;
    }

    if (error) {
      toast.error("Error loading product");
    }
  }, [product, error, dispatch]);

  if (isLoading) return <Loading />;
  if (!product)
    return <Warning name="Нет данных по продукты или проблемы с загрузкой" />;

  return (
    <div className={styles.productContainer}>
      <ProductImage src={product?.images} />
      <div className={styles.productInfo}>
        <ProductDetails
          title={product?.title || ""}
          description={product?.description || ""}
          availabilityStatus={product?.availabilityStatus || ""}
          stock={product?.stock || 0}
          tags={product?.tags || []}
          rating={product?.rating || 0}
          shippingInformation={product?.shippingInformation || ""}
          warrantyInformation={product?.warrantyInformation || ""}
        />
        <ProductPrice
          product={product}
          currentPrice={`$${product?.price}` || ""}
          originalPrice={
            product?.discountPercentage
              ? `$${calculateDiscountedPrice(product?.price, product?.discountPercentage)}`
              : `$${product?.price}`
          }
          discount={`$${product?.discountPercentage}` || ""}
        />
      </div>
      <ToastContainer />
    </div>
  );
};
export default Product;
