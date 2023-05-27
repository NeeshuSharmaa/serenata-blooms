import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">
        {" "}
        <div className="logo-outer">
          <img src="/assets/images/nav-logo.png" />
          <div className="logo-inner">
            <h1>erenata Blooms</h1>
          </div>
        </div>
      </Link>

      <div className="nav-links">
        <NavLink to="/store">
          <FontAwesomeIcon icon={faStore} className="font-aw-icons" />
        </NavLink>
        <NavLink to="/cart">
          {" "}
          <FontAwesomeIcon icon={faCartShopping} className="font-aw-icons" />
        </NavLink>
        <NavLink to="/wishlist">
          <FontAwesomeIcon icon={faHeart} className="font-aw-icons" />
        </NavLink>
        <NavLink to="/profile">
          {" "}
          <FontAwesomeIcon icon={faUser} className="font-aw-icons" />
        </NavLink>
      </div>
    </nav>
  );
}
