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

  const [cart, setCart] = useState(currentUser?.cart || []);
  const [wishlist, setWishlist] = useState(currentUser?.wishlist || []);
  const [disableCartBtn, setDisableCartBtn] = useState([]);

  const totalPrice = cart?.reduce((sum, prod) => sum + prod.price, 0);
  const discountedPrice = cart?.reduce(
    (sum, prod) => sum + (prod.discount_price || prod.price),
    0
  );

  const totalDiscount = totalPrice - discountedPrice;
  const deliveryCharges = 200;

  const paymentAmount = discountedPrice + deliveryCharges;

  const inCart = (id) => cart?.find((prod) => prod.id === id);
  const inWishlist = (id) => wishlist?.find((prod) => prod.id === id);

  const currentUserData = JSON.parse(localStorage.getItem("user"));

  const addToCartHandler = async (id) => {
    const product = products.find(({ id: prodId }) => prodId === id);
    try {
      if (currentUser.encodedToken) {
        console.log("inside add to cart");
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

        const userWithCartUpdate = { ...currentUserData, cart };
        localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
        setDisableCartBtn((prev) => prev.filter((ID) => ID !== id));
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
        console.log("added to wishlist", wishlist);
        setWishlist(wishlist);

        const userWithWishUpdate = { ...currentUserData, wishlist };
        localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
      } else {
        throw new Error("You need to login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const deleteFromCartHandler = async (id) => {
    console.log("delete id", id);
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });
      console.log("cart after delete", cart);
      setCart(cart);

      const userWithCartUpdate = { ...currentUserData, cart };
      localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteWishlistHandler = async (id) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });
      setWishlist(wishlist);

      const userWithWishUpdate = { ...currentUserData, wishlist };
      localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
    } catch (e) {
      console.log(e);
    }
  };

  const addQuantityHandler = (id) => {
    const updatedCart = cart.map((prod) =>
      prod.id === id ? { ...prod, qty: (prod.qty += 1) } : prod
    );

    setCart(updatedCart);

    const userWithCartUpdate = { ...currentUserData, cart: updatedCart };
    localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };
  const subQuantityHandler = (id) => {
    const updatedCart = cart.map((prod) =>
      prod.id === id
        ? { ...prod, qty: prod.qty !== 1 ? (prod.qty -= 1) : 1 }
        : prod
    );

    setCart(updatedCart);

    const userWithCartUpdate = { ...currentUserData, cart: updatedCart };
    localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };
  const clearCartHandler = () => {
    setCart([]);

    const userWithCartUpdate = { ...currentUserData, cart: [] };
    localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };

  const addFromCartToWishlist = (id) => {
    const prodToAdd = cart.reduce(
      (acc, curr) => (curr.id === id ? { ...curr, qty: 1 } : acc),
      {}
    );
    setWishlist((prev) => [...prev, prodToAdd]);
    const updatedCart = cart.filter(({ id: ID }) => ID !== id);
    setCart(updatedCart);

    const updatedUser = {
      ...currentUserData,
      wishlist: [...currentUserData.wishlist, prodToAdd],
      cart: updatedCart,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  const allCartProdsToWishlistHandler = () => {
    const cartForWishlist = cart.map((prod) => ({ ...prod, qty: 1 }));
    setWishlist((prev) => [...prev, ...cartForWishlist]);
    setCart([]);

    const userWithWishUpdate = {
      ...currentUserData,
      wishlist: [...currentUserData.wishlist, ...cartForWishlist],
      cart: [],
    };
    localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
  };

  const addToCart = (id) => {
    setDisableCartBtn((prev) => [...prev, id]);
    addToCartHandler(id);
  };
  const moveToCart = (id) => {
    addToCartHandler(id);
    deleteWishlistHandler(id);
  };

  const values = {
    cart,
    inCart,
    wishlist,
    inWishlist,
    totalPrice,
    totalDiscount,
    paymentAmount,
    deliveryCharges,
    disableCartBtn,
    setDisableCartBtn,
    addToCartHandler,
    addToCart,
    moveToCart,
    addToWishlistHandler,
    addFromCartToWishlist,
    deleteFromCartHandler,
    clearCartHandler,
    deleteWishlistHandler,
    allCartProdsToWishlistHandler,
    addQuantityHandler,
    subQuantityHandler,
  };
  return (
    <CartWishlistContext.Provider value={values}>
      {children}
    </CartWishlistContext.Provider>
  );
}
