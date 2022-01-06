import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import SlideShow from "../../components/SlideShow/SlideShow";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CartAction } from "./../../redux/action/cartAction";
import ReactPaginate from "react-paginate";
import "./MainPadge.css";
import { getMovies } from "../../redux/action/getdata";

export default function MainPadge() {
  const [books, setBooks] = useState([{}]);
  const [offset, setOffset] = useState(0);
  const [parPadge] = useState(4);
  const [padgeCount, setPadgeCount] = useState(0);

  const getData = useSelector((state) => state.data.currentData);
  const getCarts = useSelector((state) => state.carts.currentGoots);
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(getMovies(getData));
    const slice = getData.slice(offset, offset + parPadge);
    setBooks(slice);
    setPadgeCount(Math.ceil(getData.length / parPadge));
    console.log('effect')
  }, [offset]);
    

  const handlePageClick = (e) => {
    setOffset(offset + parPadge);
  };
console.log('out')
  const handleClick = (e) => {
    dispatch(CartAction(getCarts + 1));
  };


  return (
    <div>
      <NavBar />
      <SlideShow />
      <div className="row">
        {books.map((book, index) => {
          return (
            <div
              key={index}
              className="col-md-3 d-flex text-center p-4"
              style={{ justifyContent: "space-around" }}
            >
              <BookCard book={book} handleClick={handleClick} />
            </div>
          );
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
        activeClassName={"active"}
      />
    </div>
  );
}
