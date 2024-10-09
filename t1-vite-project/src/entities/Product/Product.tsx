import React from "react";

import "react-toastify/dist/ReactToastify.css";

import { ProductItem, useTotalPrice } from "../../shared";

import ProductImage from "./ui/ProductImage";
import ProductPrice from "./ui/ProductPrice";
import ProductDetails from "./ui/ProductDetails";

import styles from "./Product.module.css";

interface ProductProps {
  product: ProductItem;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { calculateDiscountedPrice } = useTotalPrice();

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
          originalPrice={`$${product?.price}` || ""}
          currentPrice={
            product?.discountPercentage
              ? `$${calculateDiscountedPrice(product?.price, product?.discountPercentage)}`
              : `$${product?.price}`
          }
          discount={`$${product?.discountPercentage}` || ""}
        />
      </div>
    </div>
  );
};
export default Product;
