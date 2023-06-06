import { Navigate } from "react-router";
import { useAuthContext } from "../contexts/AuthProvider";

export default function GuestRoute({ children }) {
  const { loggedIn } = useAuthContext();

  return loggedIn ? <Navigate to="/" /> : children;
}
