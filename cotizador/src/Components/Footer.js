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
      </footer>

  );
}
