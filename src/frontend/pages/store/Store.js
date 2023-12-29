import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/product_card/ProductCard";

import { useFilterContext } from "../../contexts/FilterDataProvider";

import "./Store.css";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Store() {
  const { getFilteredItems } = useFilterContext();

  const filteredItems = getFilteredItems();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="store">
      <div className="filter-n-products">
        <Filters showFilters={showFilters} />
        <div className="search-n-product">
          <div className="store-items">
            {filteredItems?.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faFilter}
          className={showFilters ? "filter-icon filter-active" : "filter-icon"}
          onClick={() => setShowFilters((prev) => !prev)}
        />
      </div>
    </div>
  );
}
