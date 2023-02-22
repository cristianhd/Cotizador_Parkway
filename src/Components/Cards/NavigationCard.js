import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import DescriptionCard from "./DescriptionCard";
import PriceCard from "./PriceCard";
import BARCO from "../../assets/BARCO.svg";
import FooterDescription from "./FooterDescription";

export default function NavigationCard({
  id,
  days,
  pax,
  priceKids,
  priceAdult,
  roundTrip,
  typeProduct,
  description,
  includes,
  categoryAccommodation,
  numberNigths,
  maxPeople,
  minPeople,
}) {
  return (
    <div
      className={
        (typeProduct === "traslados" || typeProduct === "asistencias"
          ? "navigation-vertical"
          : "navigation-horizontal") + " d-flex flex-column"
      }
    >
      <Tabs className="m-1" defaultActiveKey="description">
        <Tab eventKey="description" title="Descripción">
          <DescriptionCard
            id={id}
            typeProduct={typeProduct}
            description={description}
            categoryAccommodation={categoryAccommodation}
            numberNigths={numberNigths}
            roundTrip={roundTrip}
            maxPeople={maxPeople}
            minPeople={minPeople}
            includes={includes}
          />
        </Tab>
        <Tab eventKey="price" title="Precios">
          <PriceCard
            id={id}
            days={days}
            pax={pax}
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
