import { createContext, useContext, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useLocalStorage("wishlist", []);

  const addToWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id);

    if (!exists) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);