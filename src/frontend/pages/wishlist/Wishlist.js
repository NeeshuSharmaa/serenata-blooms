import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";
import { useDataContext } from "../../contexts/DataProvider";
import "./Wishlist.css";
import { useNavigate } from "react-router";

export default function Wishlist() {
  const { dispatch } = useFilterContext();
  const { discountPercentage } = useDataContext();
  const { inCart, wishlist, moveToCart, deleteWishlistHandler } =
    useCartWishlistContext();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);

  const noOfItems = wishlist.length;

  return (
    <div className="wishlist">
      <h2>Wishlist ({noOfItems} items)</h2>
      <hr />
      <div className="wishlist-items">
        {wishlist?.map((prod) => (
          <div className="wishlist-prod" key={prod.id}>
            <div className="img-div">
              <img src={prod.image} alt={prod.name} />
            </div>
            <div className="prod-info">
              <h3>{prod.name}</h3>
              {prod.discount_price ? (
                <div className="price">
                  <span>₹ {prod.discount_price}</span>
                  <span
                    style={{
                      color: "rgb(112, 111, 111)",
                      textDecoration: "line-through",
                    }}
                  >
                    ₹ {prod.price}
                  </span>
                  <span
                    className="discount-off"
                    style={{ fontWeight: "bold", color: "green" }}
                  >
                    ({discountPercentage(prod.price, prod.discount_price)}% OFF)
                  </span>
                </div>
              ) : (
                <p>₹ {prod.price}</p>
              )}
            </div>
            <div className="btns-in-row">
              <span
                onClick={() => {
                  inCart(prod.id) ? moveToCart(prod.id) : navigate("/cart");
                }}
              >
                {inCart(prod.id) ? "Go to Cart →" : "Move to Cart"}
              </span>
              <span>|</span>

              <span onClick={() => deleteWishlistHandler(prod.id)}>Remove</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
