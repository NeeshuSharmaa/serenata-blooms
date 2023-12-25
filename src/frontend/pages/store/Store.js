import Filters from "../../components/filters/Filters";
import ProductCard from "../../components/product_card/ProductCard";

import { useFilterContext } from "../../contexts/FilterDataProvider";

import "./Store.css";

export default function Store() {
  const { getFilteredItems } = useFilterContext();

  const filteredItems = getFilteredItems();

  return (
    <div className="store">
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
