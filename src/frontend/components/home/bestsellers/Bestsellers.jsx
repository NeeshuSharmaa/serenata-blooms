import { Link } from "react-router-dom";
import { useDataContext } from "../../../contexts/DataProvider";
import "./Bestsellers.css";

export default function Bestsellers() {
  const { bestsellers } = useDataContext();
  
  return (
    <div className="bestsellers">
      <div className="head-small">
        <h1 className="heading">Meet Our Bestsellers</h1>
        <p className="para">The beloved blooms that everyone adores</p>
      </div>
      <div className="bestsellers-list">
        {bestsellers?.map(({ id, image, name, price }) => (
          <div className="best" key={id}>
            <div className="img-div">
              <img src={image} alt={name} />
            </div>
            <div className="best-info">
              <div>
                <h3>{name}</h3>
                <p>INR {price}</p>
              </div>
              <Link to={`/product-details/${id}`}>
                <button>See Details</button>
              </Link>
            </div>
            <p className="tag Bestseller">Bestseller</p>
          </div>
        ))}
      </div>
    </div>
  );
}
