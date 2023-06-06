import { useDataContext } from "../../contexts/DataProvider";
import "./HorizontalCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";
export default function HorizontalCard({
  id,
  name,
  description,
  price,
  image,
  tag,
  discount_price,
  qty,
}) {
  const { discountPercentage } = useDataContext();
  const {
    inWishlist,
    addFromCartToWishlist,
    deleteFromCartHandler,
    addQuantityHandler,
    subQuantityHandler,
  } = useCartWishlistContext();

  const [moveActive, setMoveActive] = useState(false);

  return (
    <div className="horizontal-card">
      <div style={{ fontSize: "0", display: "flex" }}>
        <img src={image} alt={name} className="hc-img" />
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="xMark"
        onClick={() => setMoveActive((prev) => !prev)}
      />

      {!moveActive && (
        <div className="prod-info">
          <h3>{name}</h3>
          <p>{description.slice(0, 40)}...</p>

          {discount_price ? (
            <div className="price">
              <span>₹ {discount_price}</span>
              <span
                style={{
                  color: "rgb(112, 111, 111)",
                  textDecoration: "line-through",
                }}
              >
                ₹ {price}
              </span>
              <span
                className="discount-off"
                style={{ fontWeight: "bold", color: "green" }}
              >
                ({discountPercentage(price, discount_price)}% OFF)
              </span>
            </div>
          ) : (
            <p>₹ {price}</p>
          )}
          <div className="quantity">
            <span>
              <b>Quantity:</b>{" "}
            </span>
            <div>
              <button
                className="quant-btn sub-quant"
                onClick={() => subQuantityHandler(id)}
              >
                -
              </button>
              <span className="quantity-num">{qty}</span>
              <button
                className="quant-btn add-quant"
                onClick={() => addQuantityHandler(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
      {moveActive && (
        <div className="btns-row-container">
          <span>Are you sure you want to move the item from cart?</span>
          <button
            className={inWishlist(id) ? "disabled-btn" : "wishlist-btn"}
            onClick={() => addFromCartToWishlist(id)}
            disabled={inWishlist(id)}
          >
            {inWishlist(id) ? "Already in Wishlist" : "Move to Wishlist"}
          </button>
          <button
            className="remove-btn"
            onClick={() => deleteFromCartHandler(id)}
          >
            Remove from Cart
          </button>
        </div>
      )}

      {tag && <p className={`tag ${tag}`}>{tag}</p>}
    </div>
  );
}
