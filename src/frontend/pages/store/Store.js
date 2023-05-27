import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/product_card/ProductCard";
import { useDataContext } from "../../contexts/DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import "./Store.css";

export default function Store() {
  const { products } = useDataContext();

  return (
    <div className="store">
      {/* <div className="store-hero-section">
        <img className="store-banner" src="/assets/images/store-banner.jpg" />
        <input
          className="search"
          type="text"
          placeholder="Search via the specific flower name or the product name"
        />
      </div> */}

      <div className="filter-n-products">
        <Filters />
        <div className="search-n-product">
          <div className="search-div">
            <input
              className="search"
              type="text"
              placeholder="Search via the specific flower name or the product name"
            />
          </div>
          <div className="store-items">
            {products.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}