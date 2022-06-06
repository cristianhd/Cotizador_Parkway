import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "./CardComponent";
import "../style/cards.css";

export default function Cards({ data }) {
  return (
    <div className="cards">
      <Row 
        xs={1} md={2} lg={2} xl={3} 
        className="gap-5 justify-content-start">
        {data &&
          data.map((document) => (
            <Col className="w-auto align-items-center">
              <Card
                name={document.name}
                hotel={document.hotel}
                rooms={document.room}
                origin={document.origin}
                destination={document.destination}
              ></Card>
            </Col>
            
          ))}
      </Row>
    </div>
  );
}
