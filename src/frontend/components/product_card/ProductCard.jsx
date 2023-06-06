import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCartShopping,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDataContext } from "../../contexts/DataProvider";
import { Link, useNavigate } from "react-router-dom";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  tag,
  discount_price,
}) {
  const { discountPercentage } = useDataContext();
  const {
    inCart,
    inWishlist,
    addToCart,
    addToWishlistHandler,
    disableCartBtn,
    deleteWishlistHandler,
  } = useCartWishlistContext();

  const navigate = useNavigate();

  return (
    <div className="product-card">
      <Link to={`/product-details/${id}`}>
        <div style={{ fontSize: "0" }}>
          <img src={image} alt={name} />{" "}
        </div>
      </Link>
      <div className="product-info">
        <div className="prod-header">
          <Link to={`/product-details/${id}`}>
            <h3>{name}</h3>
          </Link>
          <FontAwesomeIcon
            className={
              inWishlist(id) ? "wishlist-icon active" : "wishlist-icon"
            }
            icon={faHeart}
            onClick={() =>
              inWishlist(id)
                ? deleteWishlistHandler(id)
                : addToWishlistHandler(id)
            }
          />
        </div>

        {discount_price ? (
          <Link to={`/product-details/${id}`}>
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
          </Link>
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
        disabled={disableCartBtn.includes(id)}
        onClick={() => (inCart(id) ? navigate("/cart") : addToCart(id))}
      >
        {inCart(id) ? (
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
