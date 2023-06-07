import { Link } from "react-router-dom";

export default function EmptyWishlist() {
  return (
    <div className="empty-wishlist">
      <h1>Ooouchhh, an Empty Wishlist! </h1>
      <p>
        Keep an eye on your favorite items by adding them to your wishlist for
        easy access later (¬‿¬)
      </p>
      <Link to="/store">
        {" "}
        <button className="primary-btn">
          Explore our exquisite collection
        </button>
      </Link>
    </div>
  );
}
