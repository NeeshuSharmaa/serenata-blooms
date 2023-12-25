import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faHeart,
  faUser,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Navbar() {
  const { filterState, dispatch } = useFilterContext();

  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">
        {" "}
        <div className="logo-outer">
          <img src="/assets/images/nav-logo.png" alt="logo" />
          <div className="logo-inner">
            <h1>erenata Blooms</h1>
          </div>
        </div>
      </Link>

      <input
        value={filterState.search}
        className="search"
        type="text"
        placeholder="Search flower name or the product name"
        onChange={(e) => {
          dispatch({ type: "SEARCH_HANDLER", payload: e.target.value });
          navigate("/store");
        }}
        // onKeyDown={(e) => e.key === "Enter" && navigate("/store")}
      />

      <div className="nav-links">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
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
          <FontAwesomeIcon icon={faBars} className="nav-menu" />
        </NavLink>
      </div>
    </nav>
  );
}
