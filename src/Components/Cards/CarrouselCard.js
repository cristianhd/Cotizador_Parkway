import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarrouselCard() {
  const photos = [
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU",
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU",
    "http://drive.google.com/uc?export=view&id=1PEpLiDAuR0GPjLxJZ1s35fpADM-jYHNU",
  ]; // test parameter

  return (
    <Carousel className="photo-card">
      {photos &&
        photos.map((URL, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={URL} alt="item-card-img" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
