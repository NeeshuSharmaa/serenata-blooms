import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDataContext } from "../../contexts/DataProvider";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  _id,
  name,
  price,
  image,
  rating,
  tag,
  blooms,
  discount_price,
}) {
  const [active, setActive] = useState(false);

  const { discountPercentage } = useDataContext();

  return (
    <div className="product-card">
      <Link to={`/product-details/${id}`}>
        <div style={{ fontSize: "0" }}>
          <img src={image} alt={name} />{" "}
        </div>
      </Link>

      <div className="product-info">
        <div>
          <h3>{name}</h3>
          <FontAwesomeIcon
            className={active ? "wishlist-icon active" : "wishlist-icon"}
            icon={faHeart}
            onClick={() => setActive(!active)}
          />
        </div>
        {tag && <p className={`tag ${tag}`}>{tag}</p>}

        {discount_price ? (
          <div className="price">
            {" "}
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
      </div>
      <div className="rating-on-card">
        <span>{rating} </span>
        <FontAwesomeIcon icon={faStar} className="star-icon-on-card" />
      </div>

      <button>
        <span>Add to Cart</span>

        <FontAwesomeIcon icon={faCartShopping} className="bag-icon" />
      </button>
    </div>
  );
}
