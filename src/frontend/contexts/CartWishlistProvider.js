import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useDataContext } from "./DataProvider";
import { useAuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useState } from "react";

const CartWishlistContext = createContext();

export const useCartWishlistContext = () => useContext(CartWishlistContext);

export default function CartWishlistProvider({ children }) {
  const { products } = useDataContext();
  const { currentUser } = useAuthContext();

  const navigate = useNavigate();

  const [disableCartBtn, setDisableCartBtn] = useState(false);

  const addToCart = async (id) => {
    setDisableCartBtn(true);
    const product = products.find(({ id: prodId }) => prodId === id);
    try {
      if (currentUser?.encodedToken) {
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

        cwDispatch({ type: "add-to-cart", payload: cart });

        toast.success(`${product.name} added to cart`, {
          className: "toast-message",
        });
      } else {
        toast.warning("Login to add items into cart", {
          className: "toast-message",
        });
        navigate("/login");
      }
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in add to cart item service", e);
    }
    setDisableCartBtn(false);
  };
  const addToWishlist = async (id) => {
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
        cwDispatch({ type: "add-to-wishlist", payload: wishlist });

        toast.success(`${product.name} added to wishlist`, {
          className: "toast-message",
        });
      } else {
        toast.warning(`Login to add items into wishlist`, {
          className: "toast-message",
        });
        navigate("/login");
      }
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in add to Wishlist item service", e);
    }
  };
  const deleteFromCart = async (id) => {
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });
      cwDispatch({ type: "delete-from-cart", payload: cart });

      toast.success("Item removed from Cart", {
        className: "toast-message",
      });
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in delete cart item service", e);
    }
  };

  const deleteFromWishlist = async (id) => {
    try {
      const {
        data: { wishlist },
      } = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });

      cwDispatch({ type: "delete-from-wishlist", payload: wishlist });

      toast.success("Item removed from wishlist", {
        className: "toast-message",
      });
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in delete Wishlist item service", e);
    }
  };

  const clearCart = async (cart) => {
    try {
      for (const item of cart) {
        await axios.delete(`/api/user/cart/${item.id}`, {
          headers: {
            authorization: currentUser.encodedToken,
          },
        });
      }
      cwDispatch({ type: "clear-cart" });
      toast.success("Cart Cleared!!", {
        className: "toast-message",
      });
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in clear cart service", e);
    }
  };
  const clearWishlist = async (wishlist) => {
    try {
      for (const item of wishlist) {
        await axios.delete(`/api/user/wishlist/${item.id}`, {
          headers: {
            authorization: currentUser.encodedToken,
          },
        });
      }
      cwDispatch({ type: "clear-wishlist" });
      toast.success("Wishlist Cleared !!", {
        className: "toast-message",
      });
    } catch (e) {
      toast.error("Something went Wrong", {});
      console.log("Error in clear Wishlist service", e);
    }
  };
  const moveAllToCart = async (wishlist) => {
    try {
      for (const item of wishlist) {
        addToCart(item.id);
        deleteFromWishlist(item.id);
      }
    } catch (e) {
      toast.error("Something went Wrong", {});
      console.log("Error in move all wishlist items to cart service", e);
    }
  };
  const moveAllToWishlist = async (cart) => {
    try {
      for (const item of cart) {
        addToWishlist(item.id);
        deleteFromCart(item.id);
      }
    } catch (e) {
      toast.error("Something went Wrong", {});
      console.log("Error in move all cart items to wishlist service", e);
    }
  };

  const updateCartItemQty = async (id, actionType) => {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `api/user/cart/${id}`,
        {
          action: {
            type: actionType === "INC_QTY" ? "increment" : "decrement",
          },
        },
        {
          headers: {
            authorization: currentUser.encodedToken,
          },
        }
      );

      cwDispatch({ type: "update-cart-item-qty", payload: cart });
    } catch (e) {
      toast.error("Something went Wrong", {
        className: "toast-message",
      });
      console.log("Error in update cart item quantity service", e);
    }
  };

  const moveToWishlist = (id) => {
    addToWishlist(id);
    deleteFromCart(id);
  };
  const moveToCart = (id) => {
    addToCart(id);
    deleteFromWishlist(id);
  };

  const cwReducer = (state, { type, payload }) => {
    switch (type) {
      case "add-to-cart": {
        return { ...state, cart: payload };
      }
      case "add-to-wishlist": {
        return { ...state, wishlist: payload };
      }
      case "delete-from-cart": {
        return { ...state, cart: payload };
      }
      case "delete-from-wishlist": {
        return { ...state, wishlist: payload };
      }
      case "update-cart-item-qty": {
        return { ...state, cart: payload };
      }
      case "clear-cart": {
        return { ...state, cart: [] };
      }
      case "clear-wishlist": {
        return { ...state, wishlist: [] };
      }

      default: {
        return { cart: [], wishlist: [] };
      }
    }
  };

  const [cartWishlistState, cwDispatch] = useReducer(cwReducer, {
    cart: [],
    wishlist: [],
  });

  const totalPrice = cartWishlistState.cart.reduce(
    (sum, prod) => sum + (prod.qty ? prod.price * prod.qty : prod.price),
    0
  );
  const discountedPrice = cartWishlistState.cart.reduce(
    (sum, prod) =>
      prod.discount_price
        ? prod.qty
          ? prod.discount_price * prod.qty
          : prod.discount_price
        : prod.qty
        ? prod.price * prod.qty
        : prod.price,
    0
  );

  const totalDiscount = totalPrice - discountedPrice;
  const deliveryCharges = 200;

  const paymentAmount = discountedPrice + deliveryCharges;

  const inCart = (id) => cartWishlistState.cart.find((prod) => prod.id === id);
  const inWishlist = (id) =>
    cartWishlistState.wishlist.find((prod) => prod.id === id);

  function checkoutHandler() {
    navigate("/");
    toast.success("Congratulations, Order placed!", {
      className: "toast-message",
    });
  }

  const values = {
    cartWishlistState,
    inCart,
    inWishlist,
    disableCartBtn,
    totalPrice,
    totalDiscount,
    paymentAmount,
    deliveryCharges,
    addToCart,
    addToWishlist,
    deleteFromCart,
    deleteFromWishlist,
    updateCartItemQty,
    clearCart,
    clearWishlist,
    moveToCart,
    moveToWishlist,
    moveAllToCart,
    moveAllToWishlist,
    checkoutHandler,
  };
  return (
    <CartWishlistContext.Provider value={values}>
      {children}
    </CartWishlistContext.Provider>
  );
}
