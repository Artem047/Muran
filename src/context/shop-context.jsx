import { createContext, useState } from "react";
import { dataProduct } from "../data/utils/dataProduct";

export const ShopContext = createContext(null);

const getDefaultCart = (dataProduct) => {
  let cart = {};

  for (const category of dataProduct) {
    for (const item of category.item) {
      cart[item.id] = 0;
    }
  }

  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart(dataProduct));

  const getTotalCartAmount = (dataProduct) => {
    let totalAmount = 0;

    for (const category of dataProduct) {
      for (const item of category.item) {
        if (cartItems[item.id] > 0) {
          totalAmount += cartItems[item.id] * item.price;
        }
      }
    }

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const removeAllCart = () => {
    const newCart = Object.keys(cartItems).reduce((acc, itemId) => {
      acc[itemId] = 0;
      return acc;
    }, {});

    setCartItems(newCart);
  };

  const contextValue = {
    cartItems,
    removeFromCart,
    addToCart,
    updateCartItemCount,
    getTotalCartAmount,
    removeAllCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
