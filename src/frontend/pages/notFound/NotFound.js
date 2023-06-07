import { Link } from "react-router-dom";
import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="not-found">
      <img src="/assets/images/404.png" alt="404" />
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Go to Home Page</span>
        </button>
      </Link>
    </div>
  );
}
