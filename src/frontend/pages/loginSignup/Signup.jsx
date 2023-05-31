import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Signup() {
  const { setUserSignupData, signupHandler } = useAuthContext();
  const { dispatch } = useFilterContext();
  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);

  return (
    <div className="signup-page">
      <div className="signup-main">
        <h1>SignUp</h1>
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
        />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          onChange={(e) =>
            setUserSignupData((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />

        <input
          type="text"
          id="email"
          placeholder="email@domain.com"
          onChange={(e) =>
            setUserSignupData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <input
          type="password"
          id="password"
          placeholder="*********"
          onChange={(e) =>
            setUserSignupData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />

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
