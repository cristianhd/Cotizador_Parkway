import React, { useEffect, useState } from "react";
import selected from "../../assets/nav/selected.svg";
import {MenuItems} from "./MenuItems.js"
import "../../style/nav.css";
import { Link } from "react-router-dom";


export default function Nav() {
  const [clicked,setClicked] = useState(false);

  const handleClick= (name,event)=>{
 
    setClicked(!clicked);
 
   
  }

useEffect(() => {
  
  return () => {
    
  }
}, [])

  return (
    <div className="nav">
      <ul className="wrap">
        {MenuItems.map((item,index)=>{
          return(
            <li key={index}>
                  <a className={item.cName} href="/#" onClick={()=>{handleClick(item.name_category);return false}} type="submit">
                    <img src={item.img} alt={item.name_category}/>
                    <img src={selected} className={clicked ? "select" : "no-select"} alt="icon-select"/>
                    <h1>{item.name_category}</h1>
                  </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
