import { createContext, useContext, useReducer } from "react";
import { useDataContext } from "./DataProvider";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export default function FilterDataProvider({ children }) {
  // const { minPrice } = useDataContext();
  const { products } = useDataContext();

  console.log("length", products.length);

  const initialState = {
    search: "",
    category: [],
    flowers: [],
    sort: "",
    priceRange: 14500,
    tag: "All",
    rating: 5,
  };

  const filterReducer = (state, { type, payload }) => {
    switch (type) {
      case "SEARCH_HANDLER": {
        return { ...state, search: payload };
      }
      case "SORT_HANDLER": {
        return { ...state, sort: payload };
      }
      case "PRICE_RANGE_HANDLER": {
        return { ...state, priceRange: payload };
      }
      case "CATEGORY_CHECKBOX_HANDLER": {
        if (payload.checked) {
          return { ...state, category: [...state.category, payload.id] };
        } else {
          return {
            ...state,
            category: state.category.filter((categ) => categ !== payload.id),
          };
        }
      }
      case "FLOWER_CHECKBOX_HANDLER": {
        if (payload.checked) {
          return { ...state, flowers: [...state.flowers, payload.id] };
        } else {
          return {
            ...state,
            flowers: state.flowers.filter((flower) => flower !== payload.id),
          };
        }
      }
      case "TAG_SELECT_HANDLER": {
        return { ...state, tag: payload };
      }
      case "RATING_HANDLER": {
        return { ...state, rating: payload };
      }

      case "CLEAR_ALL_HANDLER": {
        return {
          search: "",
          category: [],
          flowers: [],
          sort: "",
          priceRange: 14500,
          tag: "All",
          rating: 5,
        };
      }
      default: {
        return { ...state };
      }
    }
  };

  const [filterState, dispatch] = useReducer(filterReducer, initialState);

  console.log("filterstate", filterState);

  const searchHandler = (arr) =>
    filterState.search.length
      ? arr.filter(
          (prod) =>
            prod.name
              .toLowerCase()
              .includes(filterState.search.toLowerCase()) ||
            prod.blooms.some((bloom) =>
              bloom.includes(filterState.search.toLowerCase())
            )
        )
      : arr;

  const categoryFilterHandler = (arr) =>
    filterState.category.length
      ? arr.filter((prod) =>
          filterState.category.some((categ) =>
            categ.includes(prod.categoryName.toLowerCase())
          )
        )
      : arr;

  // const flowerFilterHandler = (arr) =>
  //   filterState.flowers.length
  //     ? arr.filter((prod) =>
  //         filterState.flowers.some((flower) => prod.blooms.includes(flower))
  //       )
  //     : arr;

  const priceRangeHandler = (arr) =>
    filterState.priceRange < 14500
      ? arr.filter((prod) =>
          prod.discount_price
            ? prod.discount_price > 2000 &&
              prod.discount_price < filterState.priceRange
            : prod.price > 2000 && prod.price < filterState.priceRange
        )
      : arr;

  const tagFilterHandler = (arr) =>
    filterState.tag !== "All"
      ? arr.filter(({ tag }) => tag && tag.toLowerCase() === filterState.tag)
      : arr;

  const ratingFilterHandler = (arr) =>
    filterState.rating
      ? arr.filter(({ rating }) => rating <= filterState.rating)
      : arr;

  const sortPriceHandler = (arr) =>
    !filterState.sort
      ? arr
      : filterState.sort === "HL"
      ? arr.sort((a, b) =>
          b.discount_price
            ? a.discount_price
              ? b.discount_price - a.discount_price
              : b.discount_price - a.price
            : a.discount_price
            ? b.price - a.discount_price
            : b.price - a.price
        )
      : arr.sort((a, b) =>
          // a.discount_price
          //   ? b.discount_price
          //     ? a.discount_price - b.discount_Price
          //     : a.discount_Price - b.price
          //   : b.discount_Price
          //   ? a.price - b.discount_Price
          //   : a.price - b.price
          b.discount_price
            ? a.discount_price
              ? a.discount_price - b.discount_price
              : a.price - b.discount_price
            : a.discount_price
            ? a.discount_price - b.price
            : a.price - b.price
        );
  const getFilteredItems = () => {
    const filterFunctions = [
      searchHandler,
      categoryFilterHandler,
      // flowerFilterHandler,
      priceRangeHandler,
      tagFilterHandler,
      ratingFilterHandler,
      sortPriceHandler,
    ];

    return filterFunctions.reduce((acc, currFxn) => currFxn(acc), products);
  };
  const values = {
    filterState,
    dispatch,
    getFilteredItems,
  };
  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
}
