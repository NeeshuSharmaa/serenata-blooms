import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/product_card/ProductCard";

import { useFilterContext } from "../../contexts/FilterDataProvider";

import "./Store.css";

export default function Store() {
  const { getFilteredItems } = useFilterContext();

  const filteredItems = getFilteredItems();
  console.log(filteredItems);

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
          <div className="store-items">
            {filteredItems?.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
