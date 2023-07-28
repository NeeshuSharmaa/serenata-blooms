import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const bestsellers = products.filter((prod) => prod.tag === "Bestseller");

  const discountPercentage = (orignal, discount) =>
    Math.round(((orignal - discount) / orignal) * 100);

  const getData = async () => {
    try {
      const {
        data: { products },
      } = await axios.get("/api/products");
      setProducts(products);
      const {
        data: { categories },
      } = await axios.get("/api/categories");
      setCategories(categories);
    } catch (e) {
      console.error("error from fetching data", e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const values = {
    // maxPrice,
    // minPrice,
    products,

    categories,
    bestsellers,
    discountPercentage,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
