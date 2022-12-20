import React from "react";
import { Card, Nav, Row, Tab, Tabs } from "react-bootstrap";
import DescriptionCard from "./DescriptionCard";
import PriceCard from "./PriceCard";

export default function NavigationCard({
  priceKids,
  priceAdult,
  roundTrip,
  typeProduct,
  description,
}) {
  return (
    <div className="nav-card m-1 p-1 d-flex flex-column">
      <Tabs defaultActiveKey="description" className="">
        <Tab eventKey="description" title="Descripción">
          <DescriptionCard description={description}></DescriptionCard>
        </Tab>
        <Tab eventKey="price" title="Precios">
          <PriceCard
            priceKids={priceKids}
            priceAdult={priceAdult}
            roundTrip={roundTrip}
            typeProduct={typeProduct}
            description={description}
          ></PriceCard>
        </Tab>
      </Tabs>
    </div>
  );
}
