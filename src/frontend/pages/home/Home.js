import Categories from "../../components/home/categories/Categories";
import About from "../../components/home/about/About";

import "./Home.css";
import Bestsellers from "../../components/home/bestsellers/Bestsellers";

import { useEffect } from "react";
import { useFilterContext } from "../../contexts/FilterDataProvider";

export default function Home() {
  const { dispatch } = useFilterContext();
  useEffect(() => {
    dispatch({ type: "CLEAR_ALL_HANDLER" });
  }, []);
  return (
    <div className="home">
      <About />
      <Categories />
      <Bestsellers />
    </div>
  );
}
