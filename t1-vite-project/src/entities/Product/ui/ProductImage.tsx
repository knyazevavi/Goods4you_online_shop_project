import React, { useState } from "react";
import styles from "../Product.module.css";

interface ProductImageProps {
  src: string[] | undefined;
}

const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
  const mainImg = src?.[0];
  const [selectedImage, setSelectedImage] = useState(mainImg);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.productGallery}>
      <img
        src={selectedImage}
        alt="Main Page"
        className={styles.mainImage}
        sizes="(max-width: 320px) 320px,
             (max-width: 480px) 480px,
             520px"
      />

      {src && src.length > 1 && (
        <div className={styles.scrollWithItems}>
          {src.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className={styles.scrollImg}
              onClick={() => handleThumbnailClick(image)}
              style={{
                border: image === selectedImage ? "2px solid red" : "none",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImage;
