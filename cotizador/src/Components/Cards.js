import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import "../style/cards.css";

export default function Cards({ data }) {
  return (
    <>
      {data &&
        data.map((document, index) => (
          <Card key={index} data={document}></Card>
        ))}
    </>
  );
}
