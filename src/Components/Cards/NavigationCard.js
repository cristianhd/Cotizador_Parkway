import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import DescriptionCard from "./DescriptionCard";
import PriceCard from "./PriceCard";
import BARCO from "../../assets/BARCO.svg";
import FooterDescription from "./FooterDescription";

export default function NavigationCard({
  priceKids,
  priceAdult,
  roundTrip,
  typeProduct,
  description,
  categoryAccommodation,
  numberNigths,
  maxPeople,
  minPeople,
}) {
  const includes = {
    food: "Desayuno, almuerzo, Cena",
    route: "Recorrido caminando por el municipio de Puerto Nariño",
    visit:
      "Visita a los lagos de Tarapoto, la ruta del delfín rosado, Visita a la comunidad de Mocagua, Visita a la fundación Maicuchiga, (historia de los micos), Parque ecológico Mundo Amazónico, Reserva peruana el Milagro de Marasha",
  };
  return (
    <div
      className={
        (typeProduct === "traslados"
          ? "navigation-vertical"
          : "navigation-horizontal") + " d-flex flex-column"
      }
    >
      <Tabs className="m-1" defaultActiveKey="description">
        <Tab eventKey="description" title="Descripción">
          <DescriptionCard
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
