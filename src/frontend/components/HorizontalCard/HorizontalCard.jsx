import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataProvider";
import "./HorizontalCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function HorizontalCard({
  id,
  name,
  description,
  price,
  image,
  tag,
  discount_price,
}) {
  const { discountPercentage } = useDataContext();

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
              <button className="quant-btn add-quant">+</button>
              <span className="quantity-num">1</span>
              <button className="quant-btn sub-quant">-</button>
            </div>
          </div>
        </div>
      )}
      {moveActive && (
        <div className="btns-row-container">
          <span>Are you sure you want to move the item from cart?</span>
          <button className="wishlist-btn">Move to Wishlist</button>
          <button className="remove-btn">Remove from Cart</button>
        </div>
      )}

      {tag && <p className={`tag ${tag}`}>{tag}</p>}
    </div>
  );
}
