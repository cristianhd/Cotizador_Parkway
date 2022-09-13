import React, { useEffect, useRef } from "react";
import { MenuItems } from "./MenuItems.js";
import { NavLink } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "../../style/nav.css";

export default function Nav() {
  const RefButton = useRef(null);
  const dispatch = useDispatch();

// clean all data global state (redux) querySearch 
  const handleCleanQuery = () => {
    dispatch({
      type: "CLEAN_QUERY_SEARCH",
    });
  };

  // set focus button navbar in Planes index 0
  useEffect(() => {
    RefButton.current.focus();
  }, []);

  return (
    <Row className="nav-bar">
      {MenuItems.map((item, index) => {
        return (
          <Col md={3} sm={3} xs={3} className="p-0" key={index}>
            <NavLink to={item.url} className="w-100 text-decoration-none">
              <div className="w-100 d-flex justify-content-center ">
                <Button
                  variant="outline-ligth"
                  ref={index === 0 ? RefButton : null}
                  className="button-link m-0 p-1 shadow-none rounded"
                  onClick={handleCleanQuery}
                >
                  <div className="nav-links p-1">
                    <img src={item.img} alt={item.name_category} />
                    <h1>{item.name_category}</h1>
                  </div>
                </Button>
              </div>
            </NavLink>
          </Col>
        );
      })}
    </Row>
  );
}
