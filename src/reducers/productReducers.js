import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
} from "../actions/types";

const initState = { items: [], filteredItems: [], size: "", sort: "" };
export default function productReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      // console.log("State in FetcProduct reducer==>", state);
      // console.log("action in FetcProduct reducer==>", action);
      return { ...state, items: action.payload, filteredItems: action.payload };


    case FILTER_PRODUCTS_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.items,
        size: action.payload.size,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        filteredItems: action.payload.items,
        sort: action.payload.sort,
      };

    default:
      return state;
  }
}
