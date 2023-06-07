import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import { useDataContext } from "./DataProvider";
import { useAuthContext } from "./AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CartWishlistContext = createContext();

export const useCartWishlistContext = () => useContext(CartWishlistContext);

export default function CartWishlistProvider({ children }) {
  const { products } = useDataContext();
  const { currentUser } = useAuthContext();

  const [cart, setCart] = useState(currentUser?.cart || []);
  const [wishlist, setWishlist] = useState(currentUser?.wishlist || []);
  const [disableCartBtn, setDisableCartBtn] = useState([]);
  const navigate = useNavigate();

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

  // const currentUserData = JSON.parse(localStorage.getItem("user"));

  const addToCartHandler = async (id) => {
    const product = products.find(({ id: prodId }) => prodId === id);
    try {
      if (currentUser?.encodedToken) {
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
        toast.success(`${product.name} added to cart`, {
          className: "toast-message",
        });

        // const userWithCartUpdate = { ...currentUserData, cart };
        // localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
        setDisableCartBtn((prev) => prev.filter((ID) => ID !== id));
      } else {
        toast.warning("Login to add items into cart", {
          className: "toast-message",
        });
      }
    } catch (e) {
      toast.error(e.message, {
        className: "toast-message",
      });
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

        setWishlist(wishlist);
        toast.success(`${product.name} added to wishlist`, {
          className: "toast-message",
        });

        // const userWithWishUpdate = { ...currentUserData, wishlist };
        // localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
      } else {
        toast.warning(`Login to add items into wishlist`, {
          className: "toast-message",
        });
      }
    } catch (e) {
      toast.error(e.message, {
        className: "toast-message",
      });
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

      setCart(cart);
      toast.success("Item removed from Cart", {
        className: "toast-message",
      });

      // const userWithCartUpdate = { ...currentUserData, cart };
      // localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
    } catch (e) {
      toast.error(e.message, {
        className: "toast-message",
      });
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
      console.log("wishlist after delete", wishlist);
      setWishlist(wishlist);
      toast.success("Item removed from wishlist", {
        className: "toast-message",
      });

      // const userWithWishUpdate = { ...currentUserData, wishlist };
      // localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
    } catch (e) {
      toast.error(e.message, {
        className: "toast-message",
      });
    }
  };

  const addQuantityHandler = (id) => {
    const updatedCart = cart.map((prod) =>
      prod.id === id ? { ...prod, qty: (prod.qty += 1) } : prod
    );

    setCart(updatedCart);
    toast.success("Quantity of the item increased", {
      className: "toast-message",
    });

    // const userWithCartUpdate = { ...currentUserData, cart: updatedCart };
    // localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };
  const subQuantityHandler = (id) => {
    const updatedCart = cart.map((prod) =>
      prod.id === id
        ? { ...prod, qty: prod.qty !== 1 ? (prod.qty -= 1) : 1 }
        : prod
    );

    setCart(updatedCart);
    toast.success("Quantity of the item deccreased", {
      className: "toast-message",
    });

    // const userWithCartUpdate = { ...currentUserData, cart: updatedCart };
    // localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };
  const clearCartHandler = () => {
    setCart([]);

    toast.success("Cart successfuly Cleared!", {
      className: "toast-message",
    });

    // const userWithCartUpdate = { ...currentUserData, cart: [] };
    // localStorage.setItem("user", JSON.stringify(userWithCartUpdate));
  };

  const clearWishlistHandler = () => {
    setWishlist([]);
    toast.success("Wishlist successfuly Cleared!", {
      className: "toast-message",
    });

    // const userWithWishUpdate = { ...currentUserData, wishlist: [] };
    // localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
  };

  const addFromCartToWishlist = (id) => {
    const prodToAdd = cart.reduce(
      (acc, curr) => (curr.id === id ? { ...curr, qty: 1 } : acc),
      {}
    );
    setWishlist((prev) => [...prev, prodToAdd]);
    const updatedCart = cart.filter(({ id: ID }) => ID !== id);
    setCart(updatedCart);
    toast.success("Items successfuly moved to wishlist", {
      className: "toast-message",
    });

    // const updatedUser = {
    //   ...currentUserData,
    //   wishlist: [...currentUserData.wishlist, prodToAdd],
    //   cart: updatedCart,
    // };
    // localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  // const allCartProdsToWishlistHandler = () => {
  //   const cartForWishlist = cart.reduce(
  //     (acc, curr) =>
  //       wishlist.find(({ id }) => id === curr.id)
  //         ? acc
  //         : [...acc, { ...curr, qty: 1 }],
  //     []
  //   );

  //   console.log("cart to wishlist", cartForWishlist);
  //   setWishlist((prev) => [...prev, ...cartForWishlist]);
  //   setCart([]);

  //   const userWithWishUpdate = {
  //     ...currentUserData,
  //     wishlist: [...currentUserData.wishlist, ...cartForWishlist],
  //     cart: [],
  //   };
  //   localStorage.setItem("user", JSON.stringify(userWithWishUpdate));
  // };

  const addToCart = (id) => {
    setDisableCartBtn((prev) => [...prev, id]);
    addToCartHandler(id);
  };
  const moveToCart = (id) => {
    addToCartHandler(id);
    deleteWishlistHandler(id);
  };

  function checkoutHandler() {
    navigate("/");
    toast.success("Congratulations, Order placed!", {
      className: "toast-message",
    });
  }

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
    clearWishlistHandler,
    deleteWishlistHandler,
    // allCartProdsToWishlistHandler,
    addQuantityHandler,
    subQuantityHandler,
    checkoutHandler,
  };
  return (
    <CartWishlistContext.Provider value={values}>
      {children}
    </CartWishlistContext.Provider>
  );
}
