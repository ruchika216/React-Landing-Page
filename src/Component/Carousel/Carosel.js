import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './image1.jpg';
import '../../App.css';

const Carosel = () => {
  return (
    <Carousel style={{ padding: "50px" }}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 "
          src={image1}
          height={400}
          width={700}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          height={400}
          width={700}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          height={400}
          width={700}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )

}
export default Carosel;