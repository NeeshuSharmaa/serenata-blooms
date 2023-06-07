import { useLocation, useNavigate } from "react-router";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";

export default function OrderSummary({ noOfItems }) {
  const { totalPrice, totalDiscount, deliveryCharges, paymentAmount } =
    useCartWishlistContext();

  const { checkoutHandler } = useCartWishlistContext();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="checkout-container">
      <h2>Order Summary</h2>
      <hr />
      <div>
        <h3>Price Details ({noOfItems} items)</h3>

        <p>
          <span>Total MRP</span>
          <span>₹ {totalPrice}</span>
        </p>
        <p>
          <span>Discount MRP</span>
          <span>- ₹ {totalDiscount}</span>{" "}
        </p>
        <p>
          <span>Delivery Charges</span> <span>₹ {deliveryCharges}</span>
        </p>
        <hr />

        <p>
          <span>Total Amount </span>
          <span>₹ {paymentAmount}</span>
        </p>
        <button
          className="primary-btn order-btn"
          onClick={
            pathname === "/cart" ? () => navigate("/checkout") : checkoutHandler
          }
        >
          <b>{pathname === "/cart" ? "CHECKOUT" : "PLACE ORDER"}</b>
        </button>
      </div>
    </div>
  );
}
