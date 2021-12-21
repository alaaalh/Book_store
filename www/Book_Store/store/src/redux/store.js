import {createStore} from "redux";
import combineReducers from "./reducer/combinReducer";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore( combineReducers, composeEnhancers);
export default store;