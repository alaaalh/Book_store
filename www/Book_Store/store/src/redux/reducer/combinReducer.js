import { combineReducers } from "redux";

import carts from "./cartReducer";
import data from "./dataReducer"

export default combineReducers ({
    carts,
    data
})