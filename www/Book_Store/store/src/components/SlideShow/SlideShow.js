import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ImageOne from "../../assets/images/1.jpg"
import ImageTwo from "../../assets/images/2.jpg"
import ImageThree from "../../assets/images/3.jpg"

export default function SlideShow() {
  return (
    <div style={{marginTop: "55px"}}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="400px"
            src={ImageOne}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageTwo}
            height="450px"
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ImageThree}
            height="450px"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
  );
}
