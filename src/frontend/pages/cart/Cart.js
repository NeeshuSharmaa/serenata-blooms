import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import axios from "axios";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import "./Cart.css";
export default function Cart() {
  const { dispatch } = useFilterContext();
  const { currentUser } = useAuthContext();
  const { cart, setCart } = useCartWishlistContext();

  const getCartItems = async () => {
    try {
      const {
        data: { cart },
      } = await axios.get("/api/user/cart", {
        headers: {
          authorization: currentUser.encodedToken,
        },
      });
      setCart(cart);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dispatch("CLEAR_ALL_HANDLER");
    getCartItems();
  }, []);
  const noOfItems = cart?.length;
  return (
    <div className="cart">
      <div className="cart-items">
        <h2>
          <span>SHOPPING CART</span> <span>{noOfItems} items</span>
        </h2>
        <hr />
        {cart.map((prod, index) => (
          <>
            <HorizontalCard {...prod} />
            {noOfItems - 1 !== index && <hr />}
          </>
        ))}
      </div>
      <div className="checkout-container">
        <h2>Order Summary</h2>
        <hr />
        <div>
          <h3>Price Details ({noOfItems} items)</h3>

          <p>
            <span>Total MRP</span>
            <span>₹</span>
          </p>
          <p>
            <span>Discount MRP</span>
            <span>₹</span>{" "}
          </p>
          <p>
            <span>Delivery Charges</span> <span>₹ 200</span>
          </p>
          <hr />

          <p>
            <span>Total Amount </span>
            <span>₹</span>
          </p>
          <button className="primary-btn order-btn">
            <b>PLACE ORDER</b>
          </button>
        </div>
      </div>
    </div>
  );
}
