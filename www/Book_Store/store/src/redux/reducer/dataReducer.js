import { GET_DATA } from "../type"
import {GET_MOVIES_DETAILS} from '../type'

const INITIAL_STATE={
    currentData : [],
    movieDetails : {}
}

export default function data(state = INITIAL_STATE , action){
switch (action.type){
    case GET_DATA:
    return{
        ...state,
        currentData: action.payload
    }
    case GET_MOVIES_DETAILS:
    return{
        state, 
        movieDetails: action.payload
    }
    default:
        return state
}
}