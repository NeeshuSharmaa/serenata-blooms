import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";
import { useDataContext } from "../../contexts/DataProvider";
import "./Wishlist.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import EmptyWishlist from "./EmptyWishlist";

export default function Wishlist() {
  const { dispatch } = useFilterContext();
  const { discountPercentage } = useDataContext();
  const {
    cartWishlistState: { wishlist },
    inCart,
    moveToCart,
    deleteFromWishlist,
    clearWishlist,
    moveAllToCart,
  } = useCartWishlistContext();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);

  const noOfItems = wishlist.length;
  if (noOfItems === 0) {
    return <EmptyWishlist />;
  } else {
    return (
      <div className="wishlist">
        <h2>Wishlist ({noOfItems} items)</h2>
        <hr />
        <div
          style={{
            color: "#535766",
            display: "flex",
            alignSelf: "flex-end",
            cursor: "pointer",
            gap: "1rem",
          }}
        >
          <span onClick={() => clearWishlist(wishlist)}>Clear Wishlist</span>
          <span>|</span>
          <span onClick={() => moveAllToCart(wishlist)}>Move all to Cart</span>
        </div>
        <div className="wishlist-items">
          {wishlist.map((prod) => (
            <div className="wishlist-prod" key={prod.id}>
              <div className="img-div">
                <Link to={`/product-details/${prod.id}`}>
                  <img src={prod.image} alt={prod.name} />
                </Link>
              </div>
              <Link to={`/product-details/${prod.id}`}>
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
                        ({discountPercentage(prod.price, prod.discount_price)}%
                        OFF)
                      </span>
                    </div>
                  ) : (
                    <p>₹ {prod.price}</p>
                  )}
                </div>
              </Link>
              <div className="btns-in-row">
                <span
                  onClick={() => {
                    inCart(prod.id) ? navigate("/cart") : moveToCart(prod.id);
                  }}
                >
                  {inCart(prod.id) ? "Go to Cart →" : "Move to Cart"}
                </span>
                <span>|</span>
                <span onClick={() => deleteFromWishlist(prod.id)}>Remove</span>
              </div>
              {prod.tag && <p className={`tag ${prod.tag}`}>{prod.tag}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
