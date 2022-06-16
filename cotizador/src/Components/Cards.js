import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./Card";
import "../style/cards.css";

export default function Cards({ data }) {
  return (
    <div className="cards d-flex flex-column align-items-center">
      <Row xs={1} md={2} lg={2} xl={3} className="gap-5 justify-content-start">
        {data &&
          data.map((document, index) => (
            <Col className="w-auto align-items-center">
              <Card key={index} data={document}></Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
