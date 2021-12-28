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

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="group-certificate">
            <div>

          <img src={clubProducto} alt="club-de-producto"></img>
            </div>
          <div className="cert-down">
            <img src={acotur} alt="acotur"></img>
            <img src={checkIn} alt="check-in"></img>
            <img src={proColombia} alt="pro-colombia"></img>
            <img src={safeTravels} alt="afe-travels"></img>
          </div>
        </div>
        <div className="foot">
          <div className="f-top">
              <div className="info">

            <span>Organizacion Parkway, Cra. 24 # 42-10, Bogotá, Colombia</span>
              </div>
            <div className="social-links">
              <img src={instagram} alt="instagram"></img>
              <img src={facebook} alt="facebook"></img>
              <img src={whatsapp} alt="whatsapp"></img>
              <img src={youtube} alt="youtube"></img>
            </div>
          </div>
          <div className="group-links">
            <div>
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
            <div>
              <a href="/#">Terminos y condiciones</a>
            </div>
          </div>
          <div className="f-down">
            <a href="/">
              <img src={logoFoot} alt="logo-foot" />
              <span>
                Copyright 2021 © Organizacion Parkway | Todos los derechos
                reservados.
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
