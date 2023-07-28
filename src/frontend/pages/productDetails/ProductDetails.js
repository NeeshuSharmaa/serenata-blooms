import { useNavigate, useParams } from "react-router";
import { useDataContext } from "../../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowRight,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

import "./ProductDetails.css";
import { useCartWishlistContext } from "../../contexts/CartWishlistProvider";

export default function ProductDetails() {
  const { products } = useDataContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products?.find(({ id: prod_id }) => prod_id === id);

  const { discountPercentage } = useDataContext();

  const { dispatch } = useFilterContext();

  const { inCart, inWishlist, addToCart, addToWishlist, deleteFromWishlist } =
    useCartWishlistContext();

  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);

  return (
    <div className="product-details-page">
      <div style={{ position: "relative" }}>
        <img src={product?.image} alt={product?.name} />{" "}
        {product?.tag && (
          <p className={`tag ${product?.tag}`}>{product?.tag}</p>
        )}
      </div>
      <div className="prod-info">
        <h1>{product?.name}</h1>
        <div className="quantative-info">
          <p className="rating">
            <span>{product?.rating}</span>{" "}
            <FontAwesomeIcon icon={faStar} className="star-icon" />
          </p>
          {product?.discount_price ? (
            <div className="price">
              {" "}
              <span>₹ {product?.discount_price}</span>
              <span
                style={{
                  color: "rgb(112, 111, 111)",
                  textDecoration: "line-through",
                }}
              >
                ₹ {product?.price}
              </span>
            </div>
          ) : (
            <p>₹ {product?.price}</p>
          )}
          {product?.discount_price && (
            <p className="d-percentage">
              {discountPercentage(product?.price, product?.discount_price)}% OFF
            </p>
          )}
        </div>
        <p>
          <b>Blooms: </b>
          {product?.blooms.map((bloom) => (
            <li>{bloom}</li>
          ))}
        </p>
        <p className="prod-description">
          <b>Description: </b>
          {product?.description}
        </p>
        <div className="cart-wishlist-btns">
          <button
            className="primary-btn"
            onClick={() => (inCart(id) ? navigate("/cart") : addToCart(id))}
          >
            {inCart(id) ? (
              <div>
                <span style={{ fontSize: "1rem", color: "white" }}>
                  {" "}
                  Go to Cart
                </span>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
              </div>
            ) : (
              <span style={{ fontSize: "1rem" }}>Add to Cart</span>
            )}
          </button>
          <button
            className="secondary-btn"
            onClick={() =>
              inWishlist(id) ? deleteFromWishlist(id) : addToWishlist(id)
            }
          >
            {inWishlist(id) ? (
              <div>
                <span style={{ fontSize: "1rem", color: "#659132" }}>
                  Wishlisted
                </span>
                <FontAwesomeIcon
                  icon={faHeart}
                  className="heart "
                  style={{ color: "#c5e1a5" }}
                />
              </div>
            ) : (
              <span style={{ fontSize: "1rem" }}>Add to Wishlist</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
