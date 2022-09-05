import React from "react";
import acotur from "../assets/footer/acotur.png";
import checkIn from "../assets/footer/check-in.png";
import clubProducto from "../assets/footer/clubdeproducto.png";
import proColombia from "../assets/footer/procolombia.png";
import safeTravels from "../assets/footer/safe-travels.png";
import instagram from "../assets/footer/Instagram.svg";
import whatsapp from "../assets/footer/Whatsapp.svg";
import facebook from "../assets/footer/Facebook.svg";
import youtube from "../assets/footer/YouTube.svg";
import logoFoot from "../assets/footer/logo-foot.png";
import "../style/footer.css";
import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div className="m-3 p-3">
        <Row className="w-100 mx-0 my-3 d-none d-lg-block">
          <Col
            md={12}
            className="w-100 m-0 p-0 d-flex flex-row justify-content-center"
          >
            <img src={clubProducto} alt="club-de-producto"></img>
          </Col>
        </Row>
        <Row className="w-100 mx-0 my-3 p-0 d-flex flex-row justify-content-center align-items-center">
          <Col md={3} className="m-0 p-0 d-flex align-items-center">
            <div className="w-100 d-flex justify-content-center">
              <img src={acotur} alt="acotur"></img>
            </div>
          </Col>
          <Col md={3} className="m-0 p-0 d-flex align-items-center">
            <div className="w-100 d-flex justify-content-center">
              <img src={checkIn} alt="check-in"></img>
            </div>
          </Col>
          <Col md={3} className="m-0 p-0 d-flex align-items-center">
            <div className="w-100 d-flex justify-content-center">
              <img src={proColombia} alt="pro-colombia"></img>
            </div>
          </Col>
          <Col md={3} className="m-0 p-0 d-flex align-items-center">
            <div className="w-100 d-flex justify-content-center">
              <img src={safeTravels} alt="afe-travels"></img>
            </div>
          </Col>
        </Row>
      </div>
      <div className="foot p-3">
        <div className="wrap">
          <div className="f-top">
            <div className="info">
              <span>
                Organizacion Parkway, Cra. 24 # 42-10, Bogotá, Colombia
              </span>
            </div>
            <div className="social-links">
              <a href="/#">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/#">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="/#">
                <img src={whatsapp} alt="whatsapp" />
              </a>
              <a href="/#">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="group-links">
            <div className="links-left">
              <a href="https://www.colombiateinvita.com">
                colombiateinvita.com
              </a>
              <a href="https://www.ecoturismocolombia.com">
                ecoturismocolombia.com
              </a>
              <a href="https://www.parkwayinternacional.com">
                parkwayinternacional.com
              </a>
            </div>
            <div className="links-rigth">
              <a href="/#">Terminos y condiciones</a>
            </div>
          </div>
          <div className="f-down">
            <a href="/">
              <img src={logoFoot} alt="logo-foot" />
            </a>
            <span>
              Copyright 2021 © Organizacion Parkway | Todos los derechos
              reservados.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
