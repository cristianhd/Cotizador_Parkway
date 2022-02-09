import React from "react";
import { Col, Row } from "react-bootstrap";
import "../style/cards.css";
import Card from "./CardComponent";

export default function Cards() {
  return (
    <div className="cards">
      <Row xs={1} md={2} lg={2} xl={3}>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
        <Col className="w-auto">
          <Card
            title={"El paraiso Amazonico"}
            hotel={"Hotel Waya"}
            huespedes={"5"}
            origen={"Bogotá"}
            destino={"Amazonas"}
          ></Card>
        </Col>
      </Row>
    </div>
  );
}
