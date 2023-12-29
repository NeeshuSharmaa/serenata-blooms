import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCartShopping,
  faHeart,
  faUser,
  faBars,
  faMagnifyingGlass,
  faXmark,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { filterState, dispatch } = useFilterContext();
  const [menuActive, setMenuActive] = useState(false);

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
      />

      <div style={{ position: "relative" }}>
        <div className={menuActive ? "nav-links menu-active" : "nav-links"}>
          <NavLink
            to="/store"
            className="nav-child-link"
            onClick={() => (menuActive ? setMenuActive(false) : null)}
          >
            <FontAwesomeIcon icon={faStore} className="font-aw-icons" />
          </NavLink>
          <NavLink
            to="/cart"
            className="nav-child-link"
            onClick={() => (menuActive ? setMenuActive(false) : null)}
          >
            <FontAwesomeIcon icon={faCartShopping} className="font-aw-icons" />
          </NavLink>
          <NavLink
            to="/wishlist"
            className="nav-child-link"
            onClick={() => (menuActive ? setMenuActive(false) : null)}
          >
            <FontAwesomeIcon icon={faHeart} className="font-aw-icons" />
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-child-link"
            onClick={() => (menuActive ? setMenuActive(false) : null)}
          >
            <FontAwesomeIcon icon={faUser} className="font-aw-icons" />
          </NavLink>
        </div>
        {menuActive && <FontAwesomeIcon icon={faCaretUp} className="caret" />}
        <FontAwesomeIcon
          icon={menuActive ? faXmark : faBars}
          className="nav-menu"
          onClick={() => setMenuActive((prev) => !prev)}
        />
      </div>
    </nav>
  );
}
