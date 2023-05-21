import "./Filters.css";

export default function Filters() {
  const sortPriceRadios = [
    { label: "Low to High", name: "sort", id: "LH" },
    { label: "High to Low", name: "sort", id: "HL" },
  ];
  const categoryCheckBox = [
    { label: "Sympathy", name: "sympathy", id: "sympathy" },
    { label: "Apology", name: "apology", id: "apology" },
    { label: "Birthday", name: "bday", id: "bday" },
    { label: "Get Well", name: "get_well", id: "get_well" },
  ];
  const ratingRadios = [
    { label: "4.2 & below 4.2", name: "rating", id: 4.2 },
    { label: "4.5 & below 4.5", name: "rating", id: 4.5 },
    { label: "4.8 & below 4.8", name: "rating", id: 4.8 },
    { label: "5 & below 5", name: "rating", id: 4 },
  ];

  // const FlowerCheckbox = [
  //   { label: "Hydrangea", name: "hydrangea", id: "hydra" },
  //   { label: "Rose", name: "rose", id: "rose" },
  //   { label: "Lily", name: "lily", id: "lily" },
  //   { label: "Carnation", name: "carnation", id: "carnation" },
  //   { label: "Peony", name: "peony", id: "peony" },
  //   { label: "Stock", name: "stock", id: "stock" },
  //   { label: "Snapdragon", name: "snapdragon", id: "snapdragon" },
  //   { label: "Kalanchoe", name: "kalanchoe", id: "kalanchoe" },
  // ];
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
              <div>
                <input type="radio" name={name} id={id} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        {/* price range */}
        <div className="price-range">
          <h3>Price Range</h3>
          <div>
            <span>₹2500</span>
            <input type="range" min="2500" max="14500" />
            <span>₹14500</span>
          </div>
        </div>

        {/* category checkbox */}
        <div className="category-checkbox">
          <h3>Category</h3>
          <div>
            {categoryCheckBox.map(({ label, name, id }) => (
              <div>
                <input type="checkbox" name={name} id={id} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
        {/* rating */}
        <div className="rating-filter">
          <h3>Rating</h3>
          <div>
            {ratingRadios.map(({ label, name, id }) => (
              <div>
                <input type="radio" name={name} id={id} />
                <label htmlFor={id}>{label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
