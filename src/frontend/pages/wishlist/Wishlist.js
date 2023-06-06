import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Wishlist() {
  const { dispatch } = useFilterContext();
  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, [dispatch]);
  return <div className="wishlist"></div>;
}
