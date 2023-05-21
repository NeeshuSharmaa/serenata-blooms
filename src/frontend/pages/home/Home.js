import Categories from "../../components/home/categories/Categories";
import About from "../../components/home/about/About";

import "./Home.css";
import Bestsellers from "../../components/home/bestsellers/Bestsellers";

export default function Home() {
  return (
    <div className="home">
      <About />
      <Categories />
      <Bestsellers />
    </div>
  );
}
