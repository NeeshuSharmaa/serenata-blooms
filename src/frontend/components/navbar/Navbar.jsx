import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-outer">
        <img src="/assets/images/logo.png" />
        <div className="logo-inner">
          <h1>erenata Blooms</h1>
          <small>Where Timeless Beauty Meets Unforgettable Moments. </small>
        </div>
      </div>

      <div className="nav-links">
        <FontAwesomeIcon icon={faCartShopping} className="font-aw-icons" />
        <FontAwesomeIcon icon={faHeart} className="font-aw-icons" />
        <FontAwesomeIcon icon={faUser} className="font-aw-icons" />
      </div>
    </nav>
  );
}
