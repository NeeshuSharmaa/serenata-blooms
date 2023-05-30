import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Login() {
  const { setUserLoginData, loginHandler } = useAuthContext();
  const { dispatch } = useFilterContext();
  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, []);

  return (
    <div className="login-page">
      <div className="login-main">
        <h1>Login</h1>

        <input
          type="text"
          id="email"
          placeholder="email@domain.com"
          onChange={(e) =>
            setUserLoginData((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <input
          type="password"
          id="password"
          placeholder="*********"
          onChange={(e) =>
            setUserLoginData((prev) => ({ ...prev, password: e.target.value }))
          }
        />

        <button className="login-btn btn" onClick={loginHandler}>
          Login
        </button>
        <div className="line-or">
          <hr />
          <span>or</span>
        </div>
        <button className="guest-login-btn btn" onClick={loginHandler}>
          Login as Guest
        </button>

        <div className="go-to-link">
          <span>Don't have an account?</span>
          <Link to="/signup">
            <span>Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
