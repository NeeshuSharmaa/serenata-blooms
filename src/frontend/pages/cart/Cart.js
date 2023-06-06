import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import "./Cart.css";
import EmptyCart from "./EmptyCart";
import OrderSummary from "./OrderSummary";

export default function Cart() {
  const { dispatch } = useFilterContext();
  const { cart, clearCartHandler, allCartProdsToWishlistHandler } =
    useCartWishlistContext();

  const noOfItems = cart?.length;

  function CartItems() {
    return (
      <div className="cart-items">
        <h2>
          <span>SHOPPING CART</span> <span>{noOfItems} items</span>
        </h2>
        <div className="clear-cart-atonce">
          <span onClick={clearCartHandler}>Remove All from Cart</span>
          <span onClick={allCartProdsToWishlistHandler}>
            Move All to Wishlist
          </span>
        </div>

        <hr />
        {cart.map((prod, index) => (
          <div key={prod.id}>
            <HorizontalCard {...prod} />
            {noOfItems - 1 !== index && <hr />}
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    dispatch("CLEAR_ALL_HANDLER");
  }, [dispatch]);

  return (
    <div className="cart">
      {cart.length ? (
        <>
          <CartItems />
          <OrderSummary noOfItems={noOfItems} />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
