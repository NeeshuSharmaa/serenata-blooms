import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
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
      {discount_price && (
        <div className="save-tag">
          Save {discountPercentage(price, discount_price)}%
        </div>
      )}

      <div className="prod-info">
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
          </div>
        ) : (
          <p>₹ {price}</p>
        )}
      </div>
    </div>
  );
}
