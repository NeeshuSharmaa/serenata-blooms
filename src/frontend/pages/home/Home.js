import Categories from "../../components/home/categories/Categories";
import About from "../../components/home/about/About";
import Hero from "../../components/home/Hero/Hero";

import "./Home.css";
import Bestsellers from "../../components/home/bestsellers/Bestsellers";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Categories />
      <Bestsellers />
      <About />
    </div>
  );
}
