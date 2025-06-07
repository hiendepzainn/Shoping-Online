import { combineReducers } from "redux";
import cartReducer from "./cart.js";

var allReducers = combineReducers({
  cartReducer,
});

export default allReducers;
