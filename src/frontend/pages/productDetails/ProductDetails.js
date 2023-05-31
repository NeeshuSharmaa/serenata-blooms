import { useParams } from "react-router";
import { useDataContext } from "../../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

import "./ProductDetails.css";

export default function ProductDetails() {
  const { products } = useDataContext();
  const { id } = useParams();
  console.log("id", typeof id);

  const product = products?.find(({ id: prod_id }) => prod_id === id);

  const { discountPercentage } = useDataContext();

  const { dispatch } = useFilterContext();

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
          <button className="cart-btn">Add to Cart</button>
          <button className="wish-btn">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
}
