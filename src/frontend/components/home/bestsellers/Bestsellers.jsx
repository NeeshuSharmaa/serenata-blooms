import { useDataContext } from "../../../contexts/DataProvider";
import "./Bestsellers.css";

export default function Bestsellers() {
  const { bestsellers } = useDataContext();
  console.log("bests", bestsellers);
  return (
    <div className="bestsellers">
      <div className="head-small">
        <h1 className="heading">Meet Our Bestsellers</h1>
        <p className="para">The beloved blooms that everyone adores</p>
      </div>
      <div className="bestsellers-list">
        {bestsellers?.map(({ _id, image, name, price }) => (
          <div className="best" key={_id}>
            <div className="img-div">
              <img src={image} />
            </div>
            <div className="best-info">
              <div>
                <h3>{name}</h3>
                <p>INR {price}</p>
              </div>
              <button>See Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
