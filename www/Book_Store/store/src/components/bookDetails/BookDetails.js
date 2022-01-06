import React from 'react'
import { Card } from "react-bootstrap";
import  StarRatings  from 'react-star-ratings';

export default function BookDetails(props) {
    const data = props.details.data
    console.log(props)
    
    return (
        <Card style={{ width: "30rem" , margin:"auto" , direction:'rtl'}}>
        
        <Card.Body>
          <h2>{data.author}</h2>
          <Card.Title>{data.title}</Card.Title>
          <StarRatings
          rating={data.rate}
          starRatedColor="blue"
          numberOfStars={4}
          name='rating'
          starDimension="30px"
          starSpacing="15px"
        />
        <h3 className="text-warning">price : {data.price}</h3>
        <h3 className="text-warning">amount : {data.amount}</h3>
          <Card.Text>
              {data.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
