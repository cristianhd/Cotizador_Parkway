import React, { useEffect, useState } from "react";
import selected from "../../assets/nav/selected.svg";
import {MenuItems} from "./MenuItems.js"
import "../../style/nav.css";


export default function Nav() {
  const [clicked,setClicked] = useState(false);

  const handleClick= (name)=>{
    setClicked(false);
    alert(name)
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
            <li key={index} onClick={()=>handleClick(item.name_category)}>
                  <a className={item.cName} href={item.url}>
                    <img src={item.img} alt={item.name_category}/>
                    <img src={selected} className={clicked ? "s" : "ss"} alt="icon-select"/>
                    <h1>{item.name_category}</h1>
                  </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
