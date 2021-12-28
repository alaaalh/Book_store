import React from "react";
import { useEffect } from "react";
import { axiosInstance } from "./../../axios/config";
import { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import SlideShow from "../../components/SlideShow/SlideShow";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import { CartAction } from './../../redux/action/cartAction';

import ReactPaginate from 'react-paginate';
import "./MainPadge.css"

export default function MainPadge() {
  const [books, setBooks] = useState([{}]);
  const [offset , setOffset] = useState(0)
  const [parPadge] = useState(12)
  const [padgeCount , setPadgeCount] = useState(0)


  
  useEffect(() => {
    axiosInstance
    .get(`/books`)
    .then((response) => {
        const slice = response.data.slice(offset , offset + parPadge)
        setBooks(slice);
        setPadgeCount(Math.ceil(response.data.length / parPadge))
      })
      .catch((err) => console.log(err));
    }, [offset , parPadge]);
    
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + parPadge)
  };
  const getCarts = useSelector(state => state.carts.currentGoots)
  const dispatch = useDispatch()

  const handleClick = (e)=>{
    const count = dispatch(CartAction(getCarts + 1));
    console.log(count)
  }

 
  
  return (
    <div>
        <NavBar/>
        <SlideShow/>
        <div className="row">
            {books.map((book , index) => { 
                return(  
                    <div key={index}  className="col-md-3 d-flex text-center p-4" style={{ justifyContent: 'space-around'}}>
                        <BookCard book={book} handleClick={handleClick}/>
                    </div>
                )
            })}
        </div>
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={padgeCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
    </div>
  );
}
