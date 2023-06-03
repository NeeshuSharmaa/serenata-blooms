import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import { useDataContext } from "./DataProvider";
import { useAuthContext } from "./AuthProvider";
import { useState } from "react";

const CartWishlistContext = createContext();

export const useCartWishlistContext = () => useContext(CartWishlistContext);

export default function CartWishlistProvider({ children }) {
  const { products } = useDataContext();
  const { currentUser } = useAuthContext();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToCartHandler = async (id) => {
    const product = products.find(({ id: prodId }) => prodId === id);
    try {
      if (currentUser.encodedToken) {
        const {
          data: { cart },
        } = await axios.post(
          "/api/user/cart",
          { product },
          {
            headers: {
              authorization: currentUser.encodedToken,
            },
          }
        );
        setCart(cart);

        console.log("cart response", cart);
      } else {
        throw new Error("You need to login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const addToWishlistHandler = async (id) => {
    const product = products.find(({ id: prodId }) => prodId === id);
    try {
      if (currentUser.encodedToken) {
        const {
          data: { wishlist },
        } = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: currentUser.encodedToken,
            },
          }
        );
        setWishlist(cart);

        console.log("cart response", wishlist);
      } else {
        throw new Error("You need to login");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const values = {
    addToCartHandler,
    addToWishlistHandler,
  };
  return (
    <CartWishlistContext.Provider value={values}>
      {children}
    </CartWishlistContext.Provider>
  );
}
