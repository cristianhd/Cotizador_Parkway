import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarrouselCard({ photos, typeProduct }) {
  // const photos = [
  //   "http://drive.google.com/uc?export=view&id=1iVI9FGh6FvXM0IB_IlFihwPO3TdWefzm",
  //   "http://drive.google.com/uc?export=view&id=1JnzX6nPUztFu_u0K2r4hlYbbwNqrTYc3",
  // ]; // test parameter

  const urlPhotos =
    photos &&
    photos.map((photo) => {
      if (typeProduct === "asistencias" || typeProduct === "traslados") {
        return photo;
      }
      if (photo.includes("photos")) {
        return `http://localhost:3001/${photo}`;
      }
      return `http://drive.google.com/uc?export=view&id=${photo}`;
    });

  return (
    <Carousel fade className="h-100">
      {urlPhotos &&
        urlPhotos.map((URL, index) => (
          <Carousel.Item interval={100000} className="h-100" key={index}>
            <img className="img-card" src={URL} alt="item-card-img" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}
