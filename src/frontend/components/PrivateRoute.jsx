import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";

export default function PrivateRoute({ children }) {
  const { loggedIn } = useAuthContext();
  let location = useLocation();
  return loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
