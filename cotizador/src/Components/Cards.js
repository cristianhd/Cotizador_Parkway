import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "./Card";
import "../style/cards.css";
import NewProduct from "./NewProduct";

export default function Cards({ data, typeProduct }) {
  return (
    <>
      {data &&
        data.map((data, index) => (
          <CardComponent key={index} data={data}></CardComponent>
        ))}
      
    </>
  );
}
