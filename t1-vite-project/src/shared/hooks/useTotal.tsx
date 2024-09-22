import { CartItem } from "../model/types";

export const useTotalPrice = () => {
  const calculateTotalPrice = (products: CartItem[]) => {
    return products.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalPriceWithDiscount = (products: CartItem[]) => {
    return products.reduce((total, item) => {
      const discount = item.price * (item.discountPercentage / 100);
      const discountedPrice = item.price - discount;
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  const calculateTotalProducts = (products: CartItem[]) => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
  };

  function calculateDiscountedPrice(price: number, discountPercentage: number) {
    const discountAmount = price * (discountPercentage / 100);
    const discountedPrice = price - discountAmount;
    return discountedPrice.toFixed(2);
  }

  return {
    calculateTotalPrice,
    calculateTotalPriceWithDiscount,
    calculateTotalProducts,
    calculateDiscountedPrice,
  };
};
