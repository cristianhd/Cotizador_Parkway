import React, { useEffect, useState } from "react";
import selected from "../../assets/nav/selected.svg";
import { MenuItems } from "./MenuItems.js";
import "../../style/nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState(" ");

  

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="nav">
      <ul className="wrap">
        {MenuItems.map((item, index) => {
          return (
            <li key={index} >
              <NavLink to={item.url} className={({isActive}) => isActive ? "active" : ""}>
                <button type="submit" className={item.cName}>
                  <img src={item.img} alt={item.name_category} />
               
                  <h1>{item.name_category}</h1>
                </button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
