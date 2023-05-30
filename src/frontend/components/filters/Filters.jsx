import { useDataContext } from "../../contexts/DataProvider";
import { useFilterContext } from "../../contexts/FilterDataProvider";
import "./Filters.css";

export default function Filters() {
  // const { maxPrice, minPrice } = useDataContext();
  const { filterState, dispatch } = useFilterContext();
  console.log("filter component ran");

  const sortPriceRadios = [
    { label: "Low to High", name: "sort", id: "LH" },
    { label: "High to Low", name: "sort", id: "HL" },
  ];
  const categoryCheckBox = [
    { label: "Sympathy", name: "sympathy", id: "sympathy" },
    { label: "Apology", name: "apology", id: "apology" },
    { label: "Birthday", name: "bday", id: "birthday" },
    { label: "Get Well", name: "get_well", id: "get well" },
  ];
  const ratingRadios = [
    { label: "4.2 & below 4.2", name: "rating", id: 4.2 },
    { label: "4.5 & below 4.5", name: "rating", id: 4.5 },
    { label: "4.8 & below 4.8", name: "rating", id: 4.8 },
    { label: "5 & below 5", name: "rating", id: 4 },
  ];

  const FlowerCheckbox = [
    { label: "Hydrangea", name: "hydrangea", id: "hydrangea" },
    { label: "Rose", name: "rose", id: "rose" },
    { label: "Lily", name: "lily", id: "lily" },
    { label: "Carnation", name: "carnation", id: "carnation" },
    { label: "Peony", name: "peony", id: "peony" },
    { label: "Stock", name: "stock", id: "stock" },
    { label: "Snapdragon", name: "snapdragon", id: "snapdragon" },
    { label: "Kalanchoe", name: "kalanchoe", id: "kalanchoe" },
  ];
  // const colors = ["Purple", "Pink", "Green", "White", "Blue", "Yellow", "Red", "Orange"];

  return (
    <aside className="filters-outer">
      <div className="filter-head">
        <h2>Filters</h2>
        <p>Clear All</p>
      </div>
      {/* sort price */}
      <div className="filters-inner">
        <div className="sort-price">
          <h3>Sort by Price</h3>
          <div>
            {sortPriceRadios.map(({ label, name, id }) => (
              <div key={id}>
                <input
                  checked={filterState.sort === id}
                  type="radio"
                  name={name}
                  id={id}
                  onClick={() =>
                    dispatch({ type: "SORT_HANDLER", payload: id })
                  }
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        {/* price range */}
        <div className="price-range">
          <h3>Price Range</h3>
          <div>
            <span>₹ 2000</span>
            <input
              defaultValue="14500"
              type="range"
              min="2000"
              max="14500"
              step="100"
              onChange={(e) =>
                dispatch({
                  type: "PRICE_RANGE_HANDLER",
                  payload: e.target.value,
                })
              }
            />
            <span>₹ 14500</span>
          </div>
        </div>

        {/* category checkbox */}
        <div className="category-checkbox">
          <h3>Category</h3>
          <div>
            {categoryCheckBox.map(({ label, name, id }) => (
              <div key={id}>
                <input
                  checked={filterState.category.includes(id)}
                  type="checkbox"
                  name={name}
                  id={id}
                  onChange={(e) =>
                    dispatch({
                      type: "CATEGORY_CHECKBOX_HANDLER",
                      payload: { id, checked: e.target.checked },
                    })
                  }
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        {/* Flower Category */}
        {/* <div className="flower-checkbox">
          <h3>Blooms</h3>
          <div>
            {FlowerCheckbox.map(({ label, name, id }) => (
              <div>
                <input
                  checked={filterState.flowers.includes(id)}
                  type="checkbox"
                  name={name}
                  id={id}
                  onClick={(e) =>
                    dispatch({
                      type: "FLOWER_CHECKBOX_HANDLER",
                      payload: { id, checked: e.target.checked },
                    })
                  }
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div> */}
        {/* tag */}
        <div className="tag-select-filter">
          <h3>Tags</h3>

          <select
            value={filterState.tag}
            name="tags"
            className="tag-select"
            onChange={(e) =>
              dispatch({ type: "TAG_SELECT_HANDLER", payload: e.target.value })
            }
          >
            <option className="all">All</option>
            <option value="fresh-picked">Fresh Picked</option>
            <option value="bestseller">Bestseller</option>
            <option value="new-arrival">New Arrival</option>
            <option value="florist-original">Florist Orignals</option>
          </select>
        </div>
        {/* rating */}
        <div className="rating-filter">
          <h3>Rating</h3>
          <div>
            {ratingRadios.map(({ label, name, id }) => (
              <div key={id}>
                <input
                  checked={filterState.rating === id}
                  type="radio"
                  name={name}
                  id={id}
                  onChange={() =>
                    dispatch({ type: "RATING_HANDLER", payload: id })
                  }
                />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
