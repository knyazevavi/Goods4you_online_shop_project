import React, { useState } from "react";

import { ButtonCartProps } from "../../model/types";
import AddControl from "../AddControl/AddControl";
import ButtonCartIcon from "../ButtonCartIcon/ButtonCartIcon";
import ButtonCartAdd from "../ButtonCartAdd/ButtonCartAdd";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

import styles from "./ButtonControlContainer.module.css";

const ButtonControlContainer: React.FC<ButtonCartProps> = ({
  id,
  type,
  product,
  onDecrease,
  onIncrease,
  quantities,
}) => {
  const currentQuantity = id ? (quantities?.[id] ? quantities?.[id] : 0) : 0;

  const [quantity, setQuantity] = useState<number>(product.quantity || 0);

  const handleIncreaseQuantity = () => {
    if (product.stock && quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else if (quantity == 1) {
      setQuantity(0);
    }
  };

  //TODO- обновлять данные корзины по кнопкам
  // const dispatch = useDispatch<AppDispatch>();
  // const cartItems = useSelector((state: RootState) => state.cart.products);
  // console.log(product, "product");
  // console.log(cartItems, "cartItems");

  // const cartItem = cartItems.find((item) => item.id === product.id);
  // const quantity = cartItem ? cartItem.quantity : 0;

  // const handleIncreaseQuantity = () => {
  //   dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
  // };

  // const handleDecreaseQuantity = () => {
  //   if (quantity === 1) {
  //     dispatch(removeFromCart(product.id));
  //   } else {
  //     dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
  //   }
  // };

  let buttonContent;

  switch (type) {
    case "grid":
      buttonContent =
        currentQuantity === 0 ? (
          <ButtonCartIcon onAdd={onIncrease} />
        ) : (
          <AddControl
            id={id}
            type="grid"
            quantities={quantities}
            onAdd={onIncrease}
            onDelete={onDecrease}
          />
        );
      break;
    case "product":
      buttonContent =
        quantity === 0 ? (
          <ButtonCartAdd name="Add to cart" onAdd={handleIncreaseQuantity} />
        ) : (
          <AddControl
            quantity={quantity}
            onDelete={handleDecreaseQuantity}
            onAdd={handleIncreaseQuantity}
          />
        );
      break;
    case "cart":
      buttonContent = (
        <div className={styles.itemControls}>
          {quantity !== 0 ? (
            <>
              <AddControl
                quantity={quantity}
                onDelete={handleDecreaseQuantity}
                onAdd={handleIncreaseQuantity}
              />
              <ButtonDelete />
            </>
          ) : (
            <ButtonCartIcon isRemoved={true} onAdd={handleIncreaseQuantity} />
          )}
        </div>
      );
      break;
    default:
      buttonContent = null;
      break;
  }

  return <div className={styles.buttonsCartControl}>{buttonContent}</div>;
};

export default ButtonControlContainer;
