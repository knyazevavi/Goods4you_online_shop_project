import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../../app/store/store";
import { RootState } from "../../../app/store/store";
import { ButtonCartProps } from "../../model/types";
import AddControl from "../AddControl/AddControl";
import ButtonCartIcon from "../ButtonCartIcon/ButtonCartIcon";
import ButtonCartAdd from "../ButtonCartAdd/ButtonCartAdd";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import {
  updateUserCart,
  addToCart,
  updateCart,
  removeFromCart,
} from "../../../entities/Cart/model/CartSlice";

import styles from "./ButtonControlContainer.module.css";

const ButtonControlContainer: React.FC<ButtonCartProps> = ({
  id,
  type,
  product,
  quantities,
}) => {
  const currentQuantity = id ? (quantities?.[id] ? quantities?.[id] : 0) : 0;
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.products);

  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(updateUserCart(userId as number));
  };

  const handleUpdateCart = () => {
    dispatch(updateCart({ id: product.id, quantity: quantity + 1 }));
    dispatch(updateUserCart(userId as number));
  };

  const handleRemoveFromCart = () => {
    if (quantity === 1) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(updateCart({ id: product.id, quantity: quantity - 1 }));
    }
    dispatch(updateUserCart(userId as number));
  };

  const handleFullDelete = () => {
    dispatch(removeFromCart(product));
    dispatch(updateUserCart(userId as number));
  };

  let buttonContent;

  switch (type) {
    case "grid":
      buttonContent =
        currentQuantity === 0 ? (
          <ButtonCartIcon onAdd={handleAddToCart} />
        ) : (
          <AddControl
            id={id}
            type="grid"
            quantities={quantities}
            onAdd={handleUpdateCart}
            onDelete={handleRemoveFromCart}
          />
        );
      break;
    case "product":
      buttonContent =
        quantity === 0 ? (
          <ButtonCartAdd name="Add to cart" onAdd={handleAddToCart} />
        ) : (
          <AddControl
            quantity={quantity}
            onDelete={handleRemoveFromCart}
            onAdd={handleUpdateCart}
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
                onDelete={handleRemoveFromCart}
                onAdd={handleAddToCart}
              />
              <ButtonDelete onClick={handleFullDelete} />
            </>
          ) : (
            <ButtonCartIcon isRemoved={true} onAdd={handleAddToCart} />
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
