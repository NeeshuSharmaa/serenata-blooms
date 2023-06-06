import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function ProfileDetails() {
  const { currentUser, logoutHandler } = useAuthContext();
  return (
    <div className="profile-details">
      <h2>YOUR PROFILE DETAILS</h2>
      <div className="profile-details-inner">
        <div className="user-icon">
          <FontAwesomeIcon icon={faUser} className="fa-user" />
        </div>
        <div className="user-info">
          <p>
            Name: {currentUser?.firstName} {currentUser?.lastName}
          </p>
          <p>Email: {currentUser?.email}</p>
          <button className="primary-btn" onClick={logoutHandler}>
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
