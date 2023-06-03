import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDataContext } from "../../contexts/DataProvider";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";

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
  const { currentUser } = useAuthContext();
  const { addToCartHandler, addToWishlistHandler } = useCartWishlistContext();

  const navigate = useNavigate();

  const inCart = currentUser?.cart?.find((prod) => prod.id === id);
  console.log("current user", currentUser);

  return (
    <div className="product-card">
      <Link to={`/product-details/${id}`}>
        <div style={{ fontSize: "0" }}>
          <img src={image} alt={name} />{" "}
        </div>
      </Link>
      <div className="product-info">
        <div>
          <Link to={`/product-details/${id}`}>
            <h3>{name}</h3>
          </Link>
          <FontAwesomeIcon
            className={active ? "wishlist-icon active" : "wishlist-icon"}
            icon={faHeart}
            onClick={() => {
              setActive(!active);
              addToWishlistHandler(id);
            }}
          />
        </div>

        {discount_price ? (
          <div className="price">
            <Link to={`/product-details/${id}`}>
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
            </Link>
          </div>
        ) : (
          <Link to={`/product-details/${id}`}>
            <p>₹ {price}</p>
          </Link>
        )}
      </div>

      {tag && <p className={`tag ${tag}`}>{tag}</p>}
      <div className="rating-on-card">
        <span>{rating} </span>
        <FontAwesomeIcon icon={faStar} className="star-icon-on-card" />
      </div>

      <button
        onClick={() => (inCart ? navigate("/cart") : addToCartHandler(id))}
      >
        {inCart ? (
          <>
            <span> Go to Cart</span>
            <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
          </>
        ) : (
          <>
            <span>Add to Cart</span>
            <FontAwesomeIcon icon={faCartShopping} className="bag-icon" />
          </>
        )}
      </button>
    </div>
  );
}
