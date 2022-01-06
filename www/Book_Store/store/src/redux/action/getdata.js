import { axiosInstance } from "../../axios/config";
import { GET_DATA, GET_MOVIES_DETAILS } from "../type";


export const getMovies = () => {
  return (dispatch) => {
    axiosInstance.get("/books").then((response) => {
      dispatch({
        type: GET_DATA,
        payload: response.data,
      });
    }).catch(err=> console.log(err))
  };
};


export const getMoviesDetails = (_id) => {
    return (dispatch) =>{
        axiosInstance.get(`/books/${_id}`).then(response => {
            dispatch({
                type: GET_MOVIES_DETAILS,
                payload: response.data
            })
            console.log(response)
        }).catch(err=>console.log(err))
    }
}
