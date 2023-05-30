import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Cart() {
  const { dispatch } = useFilterContext();
  useEffect(() => {
    dispatch("CLEAR_ALL_HANDLER");
  });
  return <div className="cart"></div>;
}
