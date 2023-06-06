import { useNavigate } from "react-router";

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <div className="img-div">
        <img src="/assets/images/empty-cart.png" alt="empty-cart" />
      </div>
      <div className="empty-cart-content">
        <h2>Oops, an Empty Cart!! Fill it with Blooming Delights </h2>
        <button className="primary-btn" onClick={() => navigate("/store")}>
          Explore our collection
        </button>
      </div>
    </div>
  );
}
