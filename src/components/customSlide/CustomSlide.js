import React from "react";
import { Carousel } from "react-bootstrap";
import Shoes1 from "../../assests/dashboard-img2.jpg";
import Shoes2 from "../../assests/dashboard-img1.jpg";

export const CustomSlide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className=" w-100" src={Shoes1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="w-100" src={Shoes2} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
