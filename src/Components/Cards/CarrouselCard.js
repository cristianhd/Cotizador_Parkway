import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarrouselCard() {
  const photos = [
    "http://drive.google.com/uc?export=view&id=1iVI9FGh6FvXM0IB_IlFihwPO3TdWefzm",
    "http://drive.google.com/uc?export=view&id=1JnzX6nPUztFu_u0K2r4hlYbbwNqrTYc3",
  ]; // test parameter

  return (
    <Carousel fade className="h-100">
      {photos &&
        photos.map((URL, index) => (
          <Carousel.Item className="h-100" key={index}>
            <img className="img-card" src={URL} alt="item-card-img" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
