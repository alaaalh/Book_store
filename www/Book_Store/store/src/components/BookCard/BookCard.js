import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StarRatings from 'react-star-ratings';

export default function BookCard(prop) {
    const src = `http://localhost:8080/api/books/${prop.book._id}/avatar`
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title >{prop.book.author}</Card.Title>
        <Card.Title >{prop.book.title}</Card.Title>
        <StarRatings
          rating={prop.book.rate}
          starRatedColor="blue"
          numberOfStars={4}
          name='rating'
          starDimension="30px"
          starSpacing="15px"
        />
        <Card.Title className="p-3">price = {prop.book.price}$</Card.Title>
        <Button variant="success" className="btn btn-success " onClick={prop.handleClick}>ADD TO CART</Button>
      </Card.Body>
    </Card>
  );
}
