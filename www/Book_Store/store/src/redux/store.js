import {createStore ,applyMiddleware} from "redux";
import combineReducers from "./reducer/combinReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
// import DoISuportIt from 'components/DoISuportIt';



const store = createStore( 
    combineReducers, 
    composeWithDevTools(applyMiddleware(thunk)));
export default store;