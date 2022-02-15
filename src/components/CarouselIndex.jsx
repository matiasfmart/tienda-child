import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselIndex(){
  return(
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/img/carousel.png"
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="/img/carousel1.png"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
            className="d-block w-100"
            src="/img/carousel2.jpg"
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
  );
};

export default CarouselIndex;
