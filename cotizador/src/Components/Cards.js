import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/cards.css";
import Card from "./CardComponent";
import Form from "react-bootstrap/Form";

export default function Cards({ data }) {
  console.log(data);
  return (
    <div className="cards">
      <Row xs={1} md={2} lg={2} xl={3} className="gap-5 justify-content-center">
        {data &&
          data.map((document) => (
            <Col className="w-auto align-items-center">
              <Card
                title={document.title}
                hotel={document.hotel}
                priceRooms={document.price}
                origin={document.origen}
                destino={document.destino}
              ></Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
