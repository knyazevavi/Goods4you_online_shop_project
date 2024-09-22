import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../app/store/store";
import { fetchUserCart } from "../../entities/Cart/model/CartSlice";

export const useFetchCartItems = (userId?: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartState = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserCart(userId));
    }
  }, [dispatch, userId]);

  return cartState;
};
