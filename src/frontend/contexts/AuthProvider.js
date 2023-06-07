import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const getUser = localStorage.getItem("user");
  const user = JSON.parse(getUser);
  console.log("user from local storage", user);

  const [currentUser, setCurrentUser] = useState(user);

  const navigate = useNavigate();
  const location = useLocation();

  const fromLocation = location.state?.from?.pathname;
  const tokenExists = localStorage.getItem("token")?.length ? true : false;

  const [loggedIn, setLoggedIn] = useState(tokenExists);

  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userLoginData, setUserLoginData] = useState({
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  });

  const signupHandler = async () => {
    if (
      userSignupData.firstName &&
      userSignupData.lastName &&
      userSignupData.email &&
      userSignupData.password &&
      userSignupData.confirmPassword
    ) {
      if (userSignupData.password === userSignupData.confirmPassword) {
        try {
          const {
            data: { createdUser, encodedToken },
          } = await axios.post("/api/auth/signup", userSignupData);
          const user = {
            encodedToken: encodedToken,
            firstName: createdUser.firstName.trim(),
            lastName: createdUser.firstName.trim(),
            email: createdUser.email.trim(),
          };
          setCurrentUser(user);
          localStorage.setItem("token", encodedToken);
          localStorage.setItem("user", JSON.stringify(user));
          setLoggedIn(true);
          toast.success("You're signedUp!", {
            className: "toast-message",
          });
          fromLocation === undefined
            ? navigate("/")
            : navigate(location.state?.from?.pathname);
        } catch (e) {
          console.log(e.response.data.errors[0]);
          toast.error(e.response.data.errors[0], {
            className: "toast-message",
          });
        }
      } else {
        toast.warning("Password and confirm password doesn't match!!", {
          className: "toast-message",
        });
      }
    } else {
      toast.warning("Fill all the input requirements!!", {
        className: "toast-message",
      });
    }
  };

  const loginHandler = async () => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", userLoginData);

      if (status === 200) {
        const user = {
          encodedToken: encodedToken,
          firstName: foundUser.firstName.trim(),
          lastName: foundUser.firstName.trim(),
          email: foundUser.email.trim(),
        };
        setCurrentUser(user);
        localStorage.setItem("token", encodedToken);
        localStorage.setItem("user", JSON.stringify(user));
        setLoggedIn(true);
        toast.success("You're logged In", {
          className: "toast-message",
        });
        fromLocation === undefined
          ? navigate("/")
          : navigate(location.state?.from?.pathname);
      }
    } catch (e) {
      console.log(e.response.data.errors[0]);
      toast.error(e.response.data.errors[0], {
        className: "toast-message",
      });
    }
  };
  const logoutHandler = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setLoggedIn(false);
    toast.success("You're logged out!", {
      className: "toast-message",
    });
  };

  console.log("current user", currentUser);

  const values = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
    userSignupData,
    setUserSignupData,
    userLoginData,
    setUserLoginData,
    signupHandler,
    loginHandler,
    logoutHandler,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
