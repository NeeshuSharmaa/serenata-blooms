import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);

  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userLoginData, setUserLoginData] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });
  const [currentUser, setCurrentUser] = useState({});
  const fromLocation = location.state?.from?.pathname;

  const signupHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignupData);
      localStorage.setItem("token", response.data.encodedToken);
      setCurrentUser(response.data.createdUser);
      setLoggedIn(true);
      fromLocation === undefined
        ? navigate("/")
        : navigate(location.state?.from?.pathname);
    } catch (e) {
      console.log(e.response.data.errors[0]);
    }
  };

  const loginHandler = async () => {
    try {
      const response = await axios.post("/api/auth/login", userLoginData);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        setCurrentUser(response.data.foundUser);
        setLoggedIn(true);
        fromLocation === undefined
          ? navigate("/")
          : navigate(location.state?.from?.pathname);
      }
    } catch (e) {
      console.log(e.response.data.errors[0]);
    }
  };
  const logoutHandler = () => {
    loggedIn ? setLoggedIn(false) : navigate("/login");
  };

  const values = {
    loggedIn,
    logoutHandler,
    currentUser,
    setUserSignupData,
    setUserLoginData,
    signupHandler,
    loginHandler,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
