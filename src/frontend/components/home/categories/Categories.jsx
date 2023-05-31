import "./categories.css";
import { useDataContext } from "../../../contexts/DataProvider";
import { useFilterContext } from "../../../contexts/FilterDataProvider";
import { useNavigate } from "react-router";

export default function Categories() {
  const { categories } = useDataContext();
  const { dispatch } = useFilterContext();
  const navigate = useNavigate();

  return (
    <div className="categories-comp">
      <div className="head-small">
        <h1 className="heading">Discover by OCCASSION</h1>
        <p className="para">
          Create Memories with the essence of flowers and brigthen up someone's
          day
        </p>
      </div>
      <div className="categories">
        {categories.map(({ _id, categoryName, image, id }) => (
          <div key={_id} className="category-card">
            <div className="img-div">
              {" "}
              <img src={image} alt="category-img" />
            </div>
            <h3
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({
                  type: "CATEGORY_CHECKBOX_HANDLER",
                  payload: { id: categoryName.toLowerCase(), checked: true },
                });
                navigate("/store");
              }}
            >
              {categoryName}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
