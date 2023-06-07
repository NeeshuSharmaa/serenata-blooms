import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Signup() {
  const { setUserSignupData, signupHandler } = useAuthContext();
  const { dispatch } = useFilterContext();

  const [showPassword, setShowPassword] = useState({
    pass: false,
    confirmPass: false,
  });

  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);

  return (
    <div className="signup-page">
      <div className="signup-main">
        <h1>SignUp</h1>
        <div className="name-inputs">
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={(e) =>
              setUserSignupData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={(e) =>
              setUserSignupData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            required
          />
        </div>

        <input
          type="text"
          id="email"
          placeholder="email@domain.com"
          onChange={(e) =>
            setUserSignupData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />

        <div className="password-inputs">
          <input
            type={showPassword.pass ? "text" : "password"}
            id="password"
            placeholder="Password *********"
            onChange={(e) =>
              setUserSignupData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            required
          />
          <button
            className="eye-btn"
            onClick={() =>
              setShowPassword((prev) => ({ ...prev, pass: !prev.pass }))
            }
          >
            {showPassword.pass ? (
              <FontAwesomeIcon icon={faEye} className="eye" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="eye-slash" />
            )}
          </button>
        </div>
        <div className="password-inputs">
          <input
            type={showPassword.confirmPass ? "text" : "password"}
            id="confirm-password"
            placeholder="Confirm Password *********"
            onChange={(e) =>
              setUserSignupData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            required
          />
          <button
            className="eye-btn"
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                confirmPass: !prev.confirmPass,
              }))
            }
          >
            {showPassword.confirmPass ? (
              <FontAwesomeIcon icon={faEye} className="eye" />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className="eye-slash" />
            )}
          </button>
        </div>

        <button className="signup-btn btn" onClick={signupHandler}>
          SignUp
        </button>

        <div className="go-to-link">
          <span>Already have an account?</span>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
