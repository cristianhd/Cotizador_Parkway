import React, { useEffect, useState } from "react";
import selected from "../../assets/nav/selected.svg";
import { MenuItems } from "./MenuItems.js";
import "../../style/nav.css";
import { NavLink } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState(" ");

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Row className="m-auto w-50">
      {MenuItems.map((item, index) => {
        return (
          <Col className="p-0" key={index}>
            <NavLink
              to={item.url}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Button variant="outline-ligth" className={item.cName}>
                <img src={item.img} alt={item.name_category} />
                <h1>{item.name_category}</h1>
              </Button>
            </NavLink>
          </Col>
        );
      })}
    </Row>
  );
}
