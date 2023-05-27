import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

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
      await axios
        .get("/api/products")
        .then(({ data: { products } }) => setProducts(products));
      await axios
        .get("/api/categories")
        .then(({ data: { categories } }) => setCategories(categories));
    } catch (e) {
      console.error("error from fetching data", e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const values = {
    products,
    categories,
    bestsellers,
    discountPercentage,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
