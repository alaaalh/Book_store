import React from 'react';
import BookDetails from '../../components/bookDetails/BookDetails';
import { getMoviesDetails } from '../../redux/action/getdata';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router';
import { useEffect } from 'react';

export default function DetailsPadge() {

    
    const selector = useSelector(state =>state.data.movieDetails);
    console.log(selector)
    const dispatch = useDispatch()
    const params = useParams()
    console.log(params.id)
     
    useEffect(()=>{
        dispatch(getMoviesDetails(params.id))
    },[])

    return (
        <div>
            <BookDetails details={selector}/>
        </div>
    )
}
